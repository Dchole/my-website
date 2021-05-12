const createHue = index =>
  ((index + 1) * Math.floor(Math.random() * 360)) % 360;

export default createHue;
