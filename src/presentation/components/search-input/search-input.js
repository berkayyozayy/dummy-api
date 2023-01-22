import React from "react";
import { Input } from "./search-input.styled.js";

function SearchInput({ onChange }) {
  return <Input type="text" placeholder="Search posts" onChange={onChange} />;
}

export default SearchInput;
