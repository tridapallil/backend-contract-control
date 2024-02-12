const Sequelize = require('sequelize')
const { ContractStatus } = require('../../constants/contract-status')
const { Job, Contract } = require('../../model')
const { Op } = Sequelize

const getUnpaidJobs = async (req) => {
  const { id: profileId } = req.profile
  const jobs = await Job.findAll({
    include: [
      {
        model: Contract,
        where: {
          [Op.or]: [{ ClientId: profileId }, { ContractorId: profileId }],
          status: { [Op.eq]: ContractStatus.IN_PROGRESS },
        },
      },
    ],
    where: {
      paid: { [Op.ne]: null },
    },
  })
  return jobs
}

module.exports = getUnpaidJobs
