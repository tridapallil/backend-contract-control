const depositUseCase = require('../usecases/balance/deposit')
const exceptionHandler = require('../utils/exception-handler')

const deposit = async (req, res) => {
  try {
    const updatedProfile = await depositUseCase(req)
    if (!updatedProfile) return res.status(404).end()
    res.json(updatedProfile)
  } catch (error) {
    exceptionHandler(error, res)
  }
}

module.exports = { deposit }
