import styled from "styled-components";
import * as colors from "presentation/styles/global/colors.styled";
import * as spacings from "presentation/styles/global/spacings.styled";

const UserWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  padding: `${spacings.base}`,
  cursor: "pointer",
});

const UserName = styled.p({
  color: `${colors.indigoDarken10}`,
  marginLeft: `${spacings.base}`,
});

export { UserWrapper, UserName };
