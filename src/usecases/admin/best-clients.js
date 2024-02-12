const Sequelize = require('sequelize')
const { fn, col, Op } = Sequelize
const { Job, Contract, Profile } = require('../../model')
const ValidationError = require('../../classes/ValidationError')

const parseResult = (clients) =>
  clients.map((client) => ({
    id: client['Contract.Client.id'],
    paid: client.totalPaid,
    fullName: `${client['Contract.Client.firstName']} ${client['Contract.Client.lastName']}`,
  }))

const bestClients = async (req) => {
  const { start, end, limit = 2 } = req.query
  const clients = await Job.findAll({
    raw: true,
    attributes: [[fn('SUM', col('price')), 'totalPaid']],
    include: [
      {
        model: Contract,
        required: true,
        include: [
          {
            model: Profile,
            required: true,
            as: 'Client',
          },
        ],
      },
    ],
    where: {
      paymentDate: { [Op.between]: [start, end] },
      paid: true,
    },
    group: ['Contract.ClientId'],
    order: [[col('totalPaid'), 'DESC']],
    limit,
  })
  if (!clients.length) throw new ValidationError('No data found', 404)
  return parseResult(clients)
}

module.exports = bestClients
