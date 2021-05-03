const addTitle = gists => {
  const snippets = [...gists];

  snippets.forEach(gist => {
    if ("useDevice.ts" in gist.files) {
      gist.title = "Device Detection hook";
    } else if (gist.description.startsWith("VSCode snippets")) {
      gist.title = "VCode Snippets";
    } else if (gist.description.startsWith("Store user's device")) {
      gist.title = "Persist User's Platform";
    } else if (gist.description.startsWith("Script to alert")) {
      gist.title = "Alert User's Platform";
    }
  });

  return snippets;
};

export default addTitle;
