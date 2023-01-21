import React from "react";
import User from "presentation/components/user/user";
import PostFooter from "presentation/components/post-footer/post-footer";
import {
  PostWrapper,
  PostImage,
  PostContent,
  Description,
  Date,
} from "./post.styled.js";

function Post({
  avatarUrl,
  imageUrl,
  altText,
  name,
  lastname,
  description,
  date,
  count,
  tags,
  onClick,
}) {
  return (
    <PostWrapper onClick={onClick}>
      <User
        onClick={onClick}
        avatarUrl={avatarUrl}
        name={name}
        avatarAlt={altText}
        altText={name}
        lastname={lastname}
      />
      <PostImage src={imageUrl} alt={name}></PostImage>
      <PostContent>
        <Description>{description}</Description>
        <Date>{date}</Date>
        <PostFooter count={count} tags={tags} />
      </PostContent>
    </PostWrapper>
  );
}

export default Post;
