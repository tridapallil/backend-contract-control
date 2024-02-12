const yup = require('yup')

const paramsValidation = async (req, res, next) => {
  const model = req.query
  console.log(model)
  try {
    const schemaValidationLocal = yup.object().shape({
      start: yup.date().required(),
      end: yup.date().required(),
      limit: yup.number(),
    })
    await schemaValidationLocal.validate(model, {
      abortEarly: false,
    })
    next()
  } catch (error) {
    if (error instanceof yup.ValidationError){
      res.status(400).json(error.errors)
    }
    res.status(500).end()
  }
}

module.exports = paramsValidation
