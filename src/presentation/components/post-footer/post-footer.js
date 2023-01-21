import React from "react";
import { Footer, Likes, Tags } from "presentation/components/post/post.styled";
import { Text } from "presentation/styles/global/global.styled";
import like from "presentation/icons/like.svg";

function PostFooter({ count, tags }) {
  return (
    <Footer>
      <Likes>
        <img width={20} src={like} alt="like" />
        <Text>{count}</Text>
      </Likes>
      <Tags>{tags}</Tags>
    </Footer>
  );
}

export default PostFooter;
