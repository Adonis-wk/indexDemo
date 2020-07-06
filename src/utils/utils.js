import Qs from 'qs'
// 下载方法
export function downloadA (downloadPath = '', params) {
  if (params) {
    let str = Qs.stringify(params)
    downloadPath = downloadPath + '?' + str
  }
  let aTag = document.createElement('a')
  document.body.appendChild(aTag)
  aTag.href = downloadPath
  aTag.target = '_blank'
  aTag.click()
  aTag.remove()
}
// 保留两位小数
export function roundToTwoDecimal (val) {
  if (!val) {
    return val
  }
  val = val * 100 // 取2位小数
  let tempStr = val.toString()
  if (tempStr.indexOf('.') > 0) {
    tempStr = tempStr.substring(0, tempStr.indexOf('.'))
  }
  let tempNum = (Number(tempStr) / 100)
  return tempNum
}
// currency 过滤器
export function Currency (value, currency, decimals) {
  const digitsRE = /(\d{3})(?=\d)/g
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  currency = currency != null ? currency : '$'
  decimals = decimals != null ? decimals : 2
  var stringified = Math.abs(value).toFixed(decimals)
  var _int = decimals
    ? stringified.slice(0, -1 - decimals)
    : stringified
  var i = _int.length % 3
  var head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
    : ''
  var _float = decimals
    ? stringified.slice(-1 - decimals)
    : ''
  var sign = value < 0 ? '-' : ''
  return sign + currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float
}

/*
** dayNum 历史天数——默认30天
** endDate 相对于历史时间的结束日期——默认当天日期
*/
export function GetHistoryDays (dayNum = 30, endDate = new Date()) {
  // 定义一天的毫秒数
  var dayMilliSeconds = 1000 * 60 * 60 * 24
  endDate = endDate.getTime() - dayMilliSeconds // 计算T+1天
  endDate = new Date(endDate)
  // 计算当前日期默认前30天的日期 lastDay
  var lastDay = endDate.getTime() - dayMilliSeconds * dayNum
  let d1 = new Date(lastDay)
  let d2 = endDate
  // // 获取输入日期的毫秒数
  var d1Ms = d1.getTime()
  var d2Ms = d2.getTime()
  // 定义返回值
  var ret
  // 对日期毫秒数进行循环比较，直到d1Ms 大于等于 d2Ms 时退出循环
  // 每次循环结束，给d1Ms 增加一天
  for (d1Ms; d1Ms <= d2Ms; d1Ms += dayMilliSeconds) {
    // 如果ret为空，则无需添加","作为分隔符
    if (!ret) {
      // 将给的毫秒数转换为Date日期
      var day = new Date(d1Ms)
      // 获取其年月日形式的字符串
      ret = day.getYMD()
    } else {
      // 否则，给ret的每个字符日期间添加","作为分隔符
      var day = new Date(d1Ms)
      ret = ret + ',' + day.getYMD()
    }
  }
  return ret.split(',')
}
// 给Date对象添加getYMD方法，获取字符串形式的年月日
// 如:2020-03-03
Date.prototype.getYMD = function () {
  var retDate = this.getFullYear() + '-' // 获取年份。
  let month = this.getMonth() + 1
  let day = this.getDate()
  if (month <= 9) {
    month = '0' + month
  }
  if (day <= 9) {
    day = '0' + day
  }
  retDate += month + '-' // 获取月份。
  retDate += day // 获取日。
  return retDate // 返回日期。
}
// 给String对象添加getDate方法，使字符串形式的日期返回为Date型的日期
String.prototype.getDate = function () {
  var strArr = this.split('-')
  var date = new Date(strArr[0], strArr[1] - 1, strArr[2])
  return date
}
// 补齐30天数据
export function ChangeData (datas = [], xAxisDate = [], HisDays = []) {
  let newData = []
  HisDays && HisDays.map((item, i) => {
    if (xAxisDate.includes(item)) {
      let index = xAxisDate.findIndex(_day => {
        return _day == item
      })
      newData.push(datas[index] || 0)
    } else {
      newData.push(0)
    }
  })
  return newData
}

// log埋点
export function ClickLog (userId = '', shopId = '', buttonTag = '') {
  log('instore_cn_pc', 'click', userId, shopId, buttonTag)
}
