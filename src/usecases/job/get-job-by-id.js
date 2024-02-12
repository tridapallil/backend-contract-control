const { Job, Contract } = require('../../model')

const getJobById = async (jobId, profileId) => {
  const job = await Job.findOne({
    include: [
      {
        model: Contract,
        required: true,
        where: { ClientId: profileId },
      },
    ],
    where: { id: jobId },
  })
  return job
}

module.exports = getJobById
