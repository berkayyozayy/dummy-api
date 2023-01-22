import styled from "styled-components";
import * as spacings from "presentation/styles/global/spacings.styled";
import * as colors from "presentation/styles/global/colors.styled";

const Input = styled.input({
  padding: "0.5em",
  background: `${colors.papayawhip}`,
  border: "none",
  outline: "none",
  borderRadius: `${spacings.base}`,
  margin: "0 auto",
  width: "50%",
  display: "flex",
  marginTop: `${spacings.base}`,
});

export { Input };
