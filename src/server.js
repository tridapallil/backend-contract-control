const app = require('./app')

init()

async function init() {
  try {
    app.listen(3001, () => {
      console.log('Express App Listening on http://localhost:3001/')
      console.log('Swagger UI is running on http://localhost:3001/api-docs/')
    })
  } catch (error) {
    console.error(`An error occurred: ${JSON.stringify(error)}`)
    // eslint-disable-next-line no-undef
    process.exit(1)
  }
}
