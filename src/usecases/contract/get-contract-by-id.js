const ValidationError = require('../../classes/ValidationError')
const Sequelize = require('sequelize')
const { Contract } = require('../../model')
const { Op } = Sequelize

const getContractById = async (req) => {
  const { id } = req.params
  const { id: profileId } = req.profile
  const contract = await Contract.findOne({
    where: {
      id,
      [Op.or]: [{ ClientId: profileId }, { ContractorId: profileId }],
    },
  })
  if (!contract) {
    throw new ValidationError('Contract not found', 404)
  }
  return contract
}

module.exports = getContractById
