import styled from "styled-components";
import * as spacings from "presentation/styles/global/spacings.styled";

const Nav = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const Main = styled.div({});

const UserList = styled.div({
  marginLeft: `${spacings.base}`,
});

const NavLeft = styled.div({
  display: "flex",
});

export { Nav, NavLeft, Main, UserList };
