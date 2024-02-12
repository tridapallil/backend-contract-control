const Sequelize = require('sequelize')
const { Op } = Sequelize

const getUnpaidJobs = async (req) => {
  const { Job } = req.app.get('models')
  const { Contract } = req.app.get('models')
  const { id: profileId } = req.profile
  const jobs = await Job.findAll({
    include: [
      {
        model: Contract,
        where: {
          ClientId: profileId,
          status: { [Op.ne]: 'terminated' },
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
