const { ProfileType } = require('../../constants/profile-type')

const isContractorProfile = (profile) => {
  if (profile.type === ProfileType.CONTRACTOR) return true
  return false
}

module.exports = isContractorProfile
