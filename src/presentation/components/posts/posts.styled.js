import styled from "styled-components";

const PostsWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
});

const PostsContent = styled.div({
  maxWidth: "1200px",
  display: "flex",
  margin: "0 auto",
  alignItems: "center",
  justifyContent: " space-evenly",
  flexWrap: "wrap",
  marginTop: "2rem",
});

export { PostsWrapper, PostsContent };
