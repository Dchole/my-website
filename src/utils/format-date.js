const formatDate = date =>
  new Date(date)
    .toDateString()
    .split(" ")
    .filter((_, index) => index === 1 || index === 2)
    .join(" ");

export default formatDate;
