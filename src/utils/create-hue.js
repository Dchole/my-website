/**
 * Create a Random hue for hsl color.
 * @constructor
 * @param {string} index - Index of the tag we're generating the hue for.
 * @returns {number} returns generated hue number
 */
const createHue = index => ((index + 1) * Math.floor(Math.random() * 360)) % 360

export default createHue
