const Sequelize = require('sequelize')

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
          status: { [Sequelize.Op.ne]: 'terminated' },
        },
      },
    ],
    where: {
      paid: {[Sequelize.Op.ne]: null},
    },
  })
  return jobs
}

module.exports = {
  getUnpaidJobs
}
