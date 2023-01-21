import React from "react";
import { ErrorMessage, ErrorWrapper } from "./error.styled";

function Error({ message }) {
  return (
    <ErrorWrapper>
      <ErrorMessage>{message}</ErrorMessage>
    </ErrorWrapper>
  );
}

export default Error;
