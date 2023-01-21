import React from "react";
import Avatar from "presentation/components/avatar/avatar";
import { Text } from "presentation/styles/global/global.styled";
import { UserWrapper, UserName } from "./user.styled";

function User({ avatarUrl, altText, name, lastname, title, onClick }) {
  return (
    <UserWrapper onClick={onClick}>
      <Avatar avatarUrl={avatarUrl} alt={altText} />
      <UserName>
        <Text>{title}</Text>
        {name} <span>{lastname}</span>
      </UserName>
    </UserWrapper>
  );
}

export default User;
