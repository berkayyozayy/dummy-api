export const searchPosts = (posts, inputValue) => {
  return posts?.filter((post) => {
    return inputValue.toLowerCase() === ""
      ? post
      : post.owner.firstName.toLowerCase().includes(inputValue) ||
          post.text.toLowerCase().includes(inputValue) ||
          post.tags.some((tag) => {
            return tag.toLowerCase().includes(inputValue);
          });
  });
};
