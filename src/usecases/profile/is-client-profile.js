const { ProfileType } = require('../../constants/profile-type')

const isClientProfile = (profile) => {
  if (profile.type === ProfileType.CLIENT) return true
  return false
}

module.exports = isClientProfile
