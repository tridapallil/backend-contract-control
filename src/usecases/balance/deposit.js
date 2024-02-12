const { Job, Contract, Profile } = require('../../model')
const ValidationError = require('../../classes/ValidationError')
const Sequelize = require('sequelize')
const isClientProfile = require('../profile/is-client-profile')
const { fn, col } = Sequelize

const MIN_RATIO = 1.25

const getUnpaidJob = async (profileId) => {
  const result = await Job.findOne({
    attributes: [[fn('SUM', col('price')), 'toPay']],
    raw: true,
    include: [
      {
        attributes: [],
        model: Contract,
        required: true,
        where: { ClientId: profileId },
      },
    ],
    where: {
      paid: null,
    },
    group: ['Contract.ClientId'],
  })
  return result
}

const hasBalance = (unpaidJob, amount) => {
  if (!unpaidJob || amount > unpaidJob.toPay * MIN_RATIO)
    throw new ValidationError('Not enough balance', 400)
}

const isTheSameProfile = (profileFrom, profileTo) =>
  parseInt(profileFrom, 10) === parseInt(profileTo, 10)

const deposit = async (req) => {
  const { userId } = req.params
  const { id } = req.profile
  const { amount } = req.body
  if (isTheSameProfile(id, userId))
    throw new ValidationError('The user can not deposit for itself!', 401)

  const profile = await Profile.findOne({ where: { id: userId } })

  if (!isClientProfile(profile))
    throw new ValidationError(
      'The destination user is not a client!',
      401
    )

  const unpaidJob = await getUnpaidJob(profile.id)
  hasBalance(unpaidJob, amount)

  await Profile.increment('balance', { by: amount, where: { id: userId } })
  const updatedProfile = await Profile.findOne({ where: { id: userId } })

  return updatedProfile
}

module.exports = deposit
