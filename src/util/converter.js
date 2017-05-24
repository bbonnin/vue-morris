const Converter = {
  toObject: function (data) {
    if (typeof data === 'string') {
      return JSON.parse(data)
    }
    return data
  },

  toBoolean: function (data) {
    if (typeof data === 'string') {
      return data === 'true'
    }
    return data
  },

  toInt: function(data) {
    if (typeof data === 'string') {
      return parseInt(data)
    }
    return data
  },
}

module.exports = Converter
