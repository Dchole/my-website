const getArticle = async id => {
  return fetch(`https://dev.to/api/articles/bugs_bunny/${id}`).then(res =>
    res.json()
  );
};

export default getArticle;
