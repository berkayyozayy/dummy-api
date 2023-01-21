import styled from "styled-components";

const ErrorWrapper = styled.div`
  padding: 1em;
  background-color: #ff0000;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  margin: 1em;
`;

const ErrorMessage = styled.p`
  font-size: 1.2em;
  font-weight: bold;
`;

export { ErrorWrapper, ErrorMessage };
