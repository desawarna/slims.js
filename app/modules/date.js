/**
 * @Author: Waris Agung Widodo <ido>
 * @Date:   2017-10-03T11:19:21+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: date.js
 * @Last modified by:   ido
 * @Last modified time: 2017-10-03T11:24:59+07:00
 */



module.exports = {
  lastMonth : (date, reduction = 1) => {
    var lastMonth = new Date(date)
    lastMonth = new Date(lastMonth.setMonth(lastMonth.getMonth() - reduction))
    return lastMonth
  }
}
