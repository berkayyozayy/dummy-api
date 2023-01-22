import styled from "styled-components";
import * as spacings from "presentation/styles/global/spacings.styled";

const UsersList = styled.div({
  maxWidth: "1200px",
  display: "flex",
  margin: "0 auto",
  alignItems: "center",
  justifyContent: " space-evenly",
  flexWrap: "wrap",
});

const UserCard = styled.div({
  width: "200px",
  display: "flex",
  margin: `${spacings.base}`,
  alignItems: "center",
  padding: `${spacings.base}`,
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  cursor: "pointer",
});

export { UserCard, UsersList };
