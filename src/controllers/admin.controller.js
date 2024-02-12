const bestProfessionUseCase = require('../usecases/admin/best-profession')
const bestClientsUseCase = require('../usecases/admin/best-clients')
const exceptionHandler = require('../utils/exception-handler')

const getBestProfession = async (req, res) => {
  try {
    const bestProfession = await bestProfessionUseCase(req)
    res.json(bestProfession)
  } catch (error) {
    exceptionHandler(error, res)
  }
}

const getBestClients = async (req, res) => {
  try {
    const bestClients = await bestClientsUseCase(req)
    res.json(bestClients)
  } catch (error) {
    exceptionHandler(error, res)
  }
}

module.exports = { getBestProfession, getBestClients }
