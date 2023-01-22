import React from "react";
import { Span, Strong } from "../user-profile.styled";
function UserProfileContent({
  name,
  email,
  phone,
  gender,
  dateOfBirth,
  registerDate,
  updatedDate,
  city,
  country,
  state,
  street,
}) {
  return (
    <>
      <Span>
        <Strong>Name:</Strong> {name}
      </Span>
      <Span>
        <Strong>Email:</Strong> {email}
      </Span>
      <Span>
        <Strong>Phone:</Strong> {phone}
      </Span>
      <Span>
        <Strong>Gender:</Strong> {gender}
      </Span>
      <Span>
        <Strong>Date of Birth:</Strong> {dateOfBirth}
      </Span>
      <Span>
        <Strong>Register Date:</Strong> {registerDate}
      </Span>
      <Span>
        <Strong>Updated Date:</Strong> {updatedDate}
      </Span>
      <Span>
        <Strong>City:</Strong> {city}
      </Span>
      <Span>
        <Strong>Country:</Strong> {country}
      </Span>
      <Span>
        <Strong>State:</Strong> {state}
      </Span>
      <Span>
        <Strong>Street:</Strong> {street}
      </Span>
    </>
  );
}

export default UserProfileContent;
