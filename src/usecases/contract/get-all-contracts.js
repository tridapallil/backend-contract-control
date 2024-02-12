const Sequelize = require('sequelize')
const ValidationError = require('../../classes/ValidationError')
const { Contract } = require('../../model')
const { ContractStatus } = require('../../constants/contract-status')
const { Op } = Sequelize

const getAllContracts = async (req) => {
  const { id: profileId } = req.profile
  const contract = await Contract.findAll({
    where: {
      [Op.or]: [{ ClientId: profileId }, { ContractorId: profileId }],
      status: { [Sequelize.Op.ne]: ContractStatus.TERMINATED },
    },
  })
  if (!contract) {
    throw new ValidationError('No contracts found', 404)
  }
  return contract
}

module.exports = getAllContracts
