const getUnpaidJobsUseCase = require('../usecases/job/get-unpaid-jobs')
const payJobUseCase = require('../usecases/job/pay-job')
const exceptionHandler = require('../utils/exception-handler')

const getUnpaidJobs = async (req, res) => {
  try {
    const jobs = await getUnpaidJobsUseCase(req)
    res.json(jobs)
  } catch (error) {
    exceptionHandler(error, res)
  }
}

const payJob = async (req, res) => {
  try {
    const jobs = await payJobUseCase(req)
    res.status(200).json(jobs)
  } catch (error) {
    exceptionHandler(error, res)
  }
}

module.exports = { getUnpaidJobs, payJob }
