/**
 * Convert a title into a slug.
 * The title string is converted into all lowercase and spaces will be replaced with dashes
 * @function
 * @param {string} title - Article's title.
 * @returns {string} returns title in a slug form
 */
const slugify = title => title.toLowerCase().split(" ").join("-")
export default slugify
