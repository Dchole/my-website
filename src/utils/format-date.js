/**
 * Format date to show human readable date.
 * Show day and month if published date is in current year.
 * Show day, month and year if published date is in previous year.
 * @constructor
 * @param {string} date - date string from data source
 * @returns {string} returns parsed or formatted date string
 */
const formatDate = date => {
  const parsedDate = new Date(date)

  return parsedDate.getFullYear() < new Date().getFullYear()
    ? parsedDate.toDateString().substring(4)
    : parsedDate
        .toDateString()
        .split(" ")
        .filter((_, index) => index === 1 || index === 2)
        .join(" ")
}
export default formatDate
