const isClientProfile = (profile) => {
  if (profile.type === 'client') return true
  return false
}

module.exports = isClientProfile
