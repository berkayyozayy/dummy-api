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
  altText,
  name,
  lastname,
  description,
  date,
  count,
  tags,
}) {
  return (
    <PostWrapper>
      <PostImage src={avatarUrl} alt={name}></PostImage>
      <PostContent>
        <User
          avatarUrl={avatarUrl}
          name={name}
          avatarAlt={altText}
          altText={name}
          lastname={lastname}
        />
        <Description>{description}</Description>
        <Date>{date}</Date>
        <PostFooter count={count} tags={tags} />
      </PostContent>
    </PostWrapper>
  );
}

export default Post;
