export const renderAllStories = (stories) =>
  Object.keys(stories)
    .filter((story) => story !== "default")
    .map((storyKey) => stories[storyKey](stories[storyKey].args))
    .join("\n");
