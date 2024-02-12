const ValidationError = require('../classes/ValidationError')

const exceptionHandler = (error, res) => {
  if (error instanceof ValidationError) {
    const status = error.statusCode ? error.statusCode : 400
    return res.status(status).json({ message: error.message })
  }
  return res.status(500).json({ message: 'internal server errro' })
}

module.exports = exceptionHandler
