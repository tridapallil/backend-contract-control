const isClientProfile = require('../../src/usecases/profile/is-client-profile')

describe('Tests the method which validates if a profile is client or not', () => {
  test('Should return true when testing a profile that is client.', () => {
    const profile = {
      id: 1,
      firstName: 'Harry',
      lastName: 'Potter',
      profession: 'Wizard',
      balance: 949,
      type: 'client',
      createdAt: '2024-02-11T13:10:49.155Z',
      updatedAt: '2024-02-11T21:52:30.768Z',
    }
    const result = isClientProfile(profile)

    expect(result).toBe(true)
  })

  test('Should return false when testing a profile that is client.', () => {
    const profile = {
      id: 1,
      firstName: 'Harry',
      lastName: 'Potter',
      profession: 'Wizard',
      balance: 949,
      type: 'contractor',
      createdAt: '2024-02-11T13:10:49.155Z',
      updatedAt: '2024-02-11T21:52:30.768Z',
    }
    const result = isClientProfile(profile)

    expect(result).toBe(false)
  })
})
