const addTitle = gists => {
  const snippets = [...gists];

  snippets.forEach((gist, index) => {
    switch (index) {
      case 0:
        gist.title = "Custom Upload Button";
        break;

      case 1:
        gist.title = "Error Handling";
        break;

      case 2:
        gist.title = "Device Detection Hook";
        break;

      case 3:
        gist.title = "VSCode Snippets";
        break;

      default:
        break;
    }
  });

  return snippets;
};

export default addTitle;
