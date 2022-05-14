const User = require('../models/userModel')
const appError = require('../service/appError.js')

const checkUserId = async (req, res, next) => {
  const hasCapital = (str) => {
    const result = str.match(/^.*[^0-9a-z]+.*$/)
    // 檢查發文者 id 是否包含大寫或其他符號
    if (result === null) {
      return true
    } else {
      return false
    }
  }
  if (req.body.user.length === 24 && hasCapital(req.body.user)) {
    const id = await User.findById(req.body.user).exec()
    if (id !== null) {
      next()
    } else {
      return next(appError(400, '找不到發文者 id', next))
    }
  } else {
    return next(appError(400, '發文者 id 不正確', next))
  }
}

module.exports = checkUserId
