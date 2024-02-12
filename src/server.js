const app = require('./app')

init()

async function init() {
  try {
    app.listen(3001, () => {
      console.log('Express App Listening on Port 3001')
    })
  } catch (error) {
    console.error(`An error occurred: ${JSON.stringify(error)}`)
    // eslint-disable-next-line no-undef
    process.exit(1)
  }
}
