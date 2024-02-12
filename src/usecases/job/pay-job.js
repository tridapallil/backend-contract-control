const ValidationError = require('../../classes/ValidationError')
const { Job, Profile, sequelize } = require('../../model')
const isClientProfile = require('../profile/is-client-profile')
const getJobById = require('./get-job-by-id')

const payTransaction = async (job, jobId) => {
  const transaction = await sequelize.transaction()
  try {
    await Job.update(
      { paid: true, paymentDate: new Date() },
      { where: { id: jobId }, transaction }
    )
    await Profile.increment('balance', {
      by: job.price,
      where: { id: job.Contract.ContractorId },
      transaction,
    })
    await Profile.decrement('balance', {
      by: job.price,
      where: { id: job.Contract.ClientId },
      transaction,
    })
  } catch (error) {
    if (transaction) await transaction.rollback()
    throw new Error('Internal server error')
  }
  await transaction.commit()
}

const hasBalance = (profile, job) => profile.balance < job.price

const payJob = async (req) => {
  const profile = req.profile
  const { job_id: jobId } = req.params
  if (!isClientProfile(profile))
    throw new ValidationError(
      'The user that is trying to pay, is not a client!',
      401
    )
  const job = await getJobById(jobId, profile.id)
  if (!job) throw new ValidationError('Job not found!', 400)
  if (hasBalance(profile, job))
    throw new ValidationError('Not enough balance!', 400)
  await payTransaction(job, jobId)
}

module.exports = payJob
