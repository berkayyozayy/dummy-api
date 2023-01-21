import React from "react";
import { Image } from "./avatar.styled";

function Avatar({ avatarUrl, altText }) {
  return <Image src={avatarUrl} alt={altText} />;
}

export default Avatar;
