const Converter = {
  toObject (data) {
    if (typeof data === 'string') {
      return JSON.parse(data)
    }
    return data
  },

  toBoolean (data) {
    if (typeof data === 'string') {
      return data === 'true'
    }
    return data
  },

  toInt (data) {
    if (typeof data === 'string') {
      return parseInt(data)
    }
    return data
  },
}

module.exports = Converter