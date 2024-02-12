const Sequelize = require('sequelize')
const { fn, col, Op } = Sequelize
const { Job, Contract, Profile } = require('../../model')

const bestProfession = async req => {
  const { start, end } = req.query
  const [result] = await Job.findAll({
    attributes: [[fn('SUM', col('price')), 'totalEarned']],
    include: [
      {
        model: Contract,
        required: true,
        include: [
          {
            model: Profile,
            required: true,
            as: 'Contractor',
          },
        ],
      },
    ],
    where: {
      paymentDate: { [Op.between]: [start, end] },
      paid: true,
    },
    group: ['Contract.ContractorId'],
    order: [[col('totalEarned'), 'DESC']],
    limit: 1,
  })
  return {
    totalEarned: result.dataValues.totalEarned,
    professional: result.dataValues.Contract.Contractor,
  }
}

module.exports = bestProfession
