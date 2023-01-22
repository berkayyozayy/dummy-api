import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Error from "presentation/components/common/error/error";

import LoadingSpinner from "presentation/components/common/loading/loading";
import config from "config";
import useAPI from "presentation/hooks/useAPI";
import {
  UserProfileContainer,
  UserProfilePicture,
  UserProfileData,
  Span,
  Strong,
} from "./user-profile.styled";

function UserProfile() {
  const [userProfile, setUserProfile] = useState({});
  const { id } = useParams();
  const userDetailUrl = `${config.usersUrl}/${id}`;

  const { data, error, loading } = useAPI(userDetailUrl);

  useEffect(() => {
    if (!loading && !error) {
      setUserProfile(data);
    }
  }, [data]);

  if (error) {
    return <Error message={error.message} />;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <UserProfileContainer>
      <UserProfilePicture
        src={userProfile.picture}
        alt={userProfile.firstName + " " + userProfile.lastName}
      />
      <UserProfileData>
        <Span>
          <Strong>Name:</Strong> {userProfile.firstName} {userProfile.lastName}
        </Span>
        <Span>
          <Strong>Email:</Strong> {userProfile.email}
        </Span>
        <Span>
          <Strong>Phone:</Strong> {userProfile.phone}
        </Span>
        <Span>
          <Strong>Gender:</Strong> {userProfile.gender}
        </Span>
        <Span>
          <Strong>Date of Birth:</Strong> {userProfile.dateOfBirth}
        </Span>
        <Span>
          <Strong>Register Date:</Strong> {userProfile.registerDate}
        </Span>
        <Span>
          <Strong>Updated Date:</Strong> {userProfile.updatedDate}
        </Span>
        <Span>
          <Strong>City:</Strong> {userProfile?.location?.city}
        </Span>
        <Span>
          <Strong>Country:</Strong> {userProfile?.location?.country}
        </Span>
        <Span>
          <Strong>State:</Strong> {userProfile?.location?.state}
        </Span>
        <Span>
          <Strong>Street:</Strong> {userProfile?.location?.street}
        </Span>
      </UserProfileData>
    </UserProfileContainer>
  );
}

export default UserProfile;
