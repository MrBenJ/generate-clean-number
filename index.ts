/**
  * generateCleanNumber
  * {num} Number
  * reparse num if NaN (happens in IE)
  */
const generateCleanNumber = (num: Number | String): Number => {
  const newNumber = isNaN(num)
  ? num.toString().replace(/[^0-9]/g, '')
  : num
  return parseInt(newNumber, 10)
}