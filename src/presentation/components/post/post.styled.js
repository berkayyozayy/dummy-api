import styled from "styled-components";
import * as spacings from "presentation/styles/global/spacings.styled";

const PostWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "300px",
  borderRadius: `${spacings.base}`,
  marginBottom: `${spacings.base}`,
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  margin: `${spacings.base}`,
});

const PostImage = styled.img({
  width: "100%",
  height: "200px",
  opacity: "0.5",
});

const PostContent = styled.div({
  display: "flex",
  flexDirection: "column",
  marginLeft: `${spacings.base}`,
  marginTop: `${spacings.base}`,
  marginRight: `${spacings.base}`,
});

const Description = styled.p({
  overflowWrap: "break-word",
});

const Date = styled.p({
  fontSize: "12px",
});

const Footer = styled.div({
  display: "flex",
  alignItems: "center",
  paddingBottom: `${spacings.base}`,
});

const Tags = styled.div({
  marginLeft: `${spacings.base}`,
});

const Likes = styled.div({
  display: "flex",
  alignItems: "center",
});

export {
  PostWrapper,
  PostImage,
  PostContent,
  Description,
  Date,
  Footer,
  Likes,
  Tags,
};
