const ValidationError = require('../classes/ValidationError')
const { Contract } = require('../../model')

const getContractById = async (req) => {
  const { id } = req.params
  const { id: profileId } = req.profile
  const contract = await Contract.findOne({
    where: { id, ClientId: profileId },
  })
  if (!contract) {
    throw new ValidationError('Contract not found', 404)
  }
  return contract
}

module.exports = getContractById
