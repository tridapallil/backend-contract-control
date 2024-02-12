const getContractByIdUseCase = require('../usecases/contract/get-contract-by-id')
const getAllContractsUseCase = require('../usecases/contract/get-all-contracts')
const exceptionHandler = require('../utils/exception-handler')

const getContractById = async (req, res) => {
  try {
    const contract = await getContractByIdUseCase(req)
    res.json(contract)
  } catch (error) {
    exceptionHandler(error, res)
  }
}

const getAllContracts = async (req, res) => {
  try {
    const contract = await getAllContractsUseCase(req)
    res.json(contract)
  } catch (error) {
    exceptionHandler(error, res)
  }
}

module.exports = { getContractById, getAllContracts }
