import moment from 'moment'

export function timeFromNow(date) {
  return moment(date).fromNow()
}
