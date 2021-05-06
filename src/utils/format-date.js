const formatDate = date => {
  const parsedDate = new Date(date);

  return parsedDate.getFullYear() < new Date().getFullYear()
    ? parsedDate.toDateString().substring(4)
    : parsedDate
        .toDateString()
        .split(" ")
        .filter((_, index) => index === 1 || index === 2)
        .join(" ");
};
export default formatDate;
