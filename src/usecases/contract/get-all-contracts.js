const Sequelize = require('sequelize')
const ValidationError = require('../../classes/ValidationError')
const { Contract } = require('../../model')

const getAllContracts = async req => {
  const { id: profileId } = req.profile
  const contract = await Contract.findAll({
    where: { ClientId: profileId, status: { [Sequelize.Op.ne]: 'terminated' } },
  })
  if (!contract) {
    throw new ValidationError('No contracts found', 404)
  }
  return contract
}

module.exports = getAllContracts
