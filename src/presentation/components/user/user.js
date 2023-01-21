import React from "react";
import Avatar from "presentation/components/avatar/avatar";
import { UserWrapper, UserName } from "./user.styled";

function User({ avatarUrl, altText, name, lastname }) {
  return (
    <UserWrapper>
      <Avatar avatarUrl={avatarUrl} alt={altText} />
      <UserName>
        {name} <span>{lastname}</span>
      </UserName>
    </UserWrapper>
  );
}

export default User;
