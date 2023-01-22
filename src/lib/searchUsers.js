export const searchUsers = (users, inputValue) => {
  return users?.filter((user) => {
    return inputValue.toLowerCase() === ""
      ? user
      : user.firstName.toLowerCase().includes(inputValue) ||
          user.lastName.toLowerCase().includes(inputValue) ||
          user.title.toLowerCase().includes(inputValue);
  });
};
