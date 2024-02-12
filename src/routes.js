const { Router } = require('express')
const { getProfile } = require('./middleware/getProfile')
const { getContractById, getAllContracts } = require('./controllers/contract.controller')
const { getUnpaidJobs, payJob } = require('./controllers/job.controller')
const { deposit } = require('./controllers/balance.controller')
const bestProfessionParamsValidation = require('./validations/best-profession.validation')
const bestClientsParamsValidation = require('./validations/best-clients.validation')
const { getBestProfession, getBestClients } = require('./controllers/admin.controller')
const routes = new Router()

/**
 * @returns contract by id
 */
routes.get('/contracts/:id', getProfile, getContractById)

/**
 * @returns all contracts by profile Id
 */
routes.get('/contracts', getProfile, getAllContracts)

/**
 * @returns all unpaid jobs
 */
routes.get('/jobs/unpaid', getProfile, getUnpaidJobs)

/**
 * @returns all unpaid jobs
 */
routes.get('/admin/best-profession', bestProfessionParamsValidation, getBestProfession)

/**
 * @returns all unpaid jobs
 */
routes.get('/admin/best-clients', bestClientsParamsValidation, getBestClients)

/**
 * @returns all unpaid jobs
 */
routes.post('/jobs/:job_id/pay', getProfile, payJob)

/**
 * @returns all unpaid jobs
 */
routes.post('/balances/deposit/:userId', getProfile, deposit)

module.exports = routes
