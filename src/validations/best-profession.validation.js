const yup = require('yup')

const paramsValidation = async (req, res, next) => {
  const model = req.params
  try {
    const schemaValidationLocal = yup.object().shape({
      start: yup.date(),
      end: yup.date(),
    })
    await schemaValidationLocal.validate(model, {
      abortEarly: false,
    })
    next()
  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports = paramsValidation
