const Error = require('./error')

class ValidationError extends Error {
  constructor(message, statusCode = null) {
    super(message)
    this.statusCode = statusCode
    this.name = 'ValidationError'
  }
}

module.exports = ValidationError
