import styled from "styled-components";
import * as spacings from "presentation/styles/global/spacings.styled";
import * as colors from "presentation/styles/global/colors.styled";

const UserProfileContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: `${spacings.base}`,
  border: `1px solid ${colors.papayawhip}`,
  maxWidth: "300px",
  margin: "0 auto",

  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
});

const UserProfilePicture = styled.div({
  borderRadius: "50%",
  marginRight: `${spacings.base}`,
  marginBottom: `${spacings.base}`,
});

const UserProfileData = styled.div({
  display: "flex",
  flexDirection: "column",
});

const UserProfileDataItem = styled.div({
  marginBottom: `${spacings.base}`,
});

const Span = styled.span({
  color: `${colors.indigo}`,
  fontSize: "1.2em",
});

const Strong = styled.strong({
  fontWeight: "bold",
});

export {
  UserProfileContainer,
  UserProfilePicture,
  UserProfileData,
  Span,
  Strong,
};
