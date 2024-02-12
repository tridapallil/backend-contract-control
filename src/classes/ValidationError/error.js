class Error {
  constructor(message) {
    this.message = message
    this.statusCode = null
    this.name = 'Error'
    this.path = ''
    this.stack = 'Deel Service Stack'
  }
}

module.exports = Error
