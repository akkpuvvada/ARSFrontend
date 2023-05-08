import moment from 'moment'

export const getGeneralDate = (date) => {
  const dateFormat = 'MMM D, YY' // 1 May, 97
  return moment(date).format(dateFormat)
}
