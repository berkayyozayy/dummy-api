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
import UserProfileContent from "presentation/components/user-profile/user-profile-content/user-profile-content";
import Avatar from "presentation/components/avatar/avatar";
import { formatDate } from "lib/formatDate.js";
import { formatText } from "lib/formatText.js";

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
      <UserProfilePicture>
        <Avatar
          avatarUrl={userProfile.picture}
          alt={userProfile.firstName + " " + userProfile.lastName}
        />
        <hr />
      </UserProfilePicture>

      <UserProfileData>
        <UserProfileContent
          name={userProfile.firstName + "" + userProfile.lastName}
          email={userProfile.email}
          phone={userProfile.phone}
          gender={userProfile.gender}
          dateOfBirth={formatDate(userProfile.dateOfBirth)}
          registerDate={formatDate(userProfile.registerDate)}
          updatedDate={formatDate(userProfile.updatedDate)}
          city={formatText(userProfile?.location?.city)}
          country={userProfile?.location?.country}
          state={userProfile?.location?.state}
          street={formatText(userProfile?.location?.street)}
        />
      </UserProfileData>
    </UserProfileContainer>
  );
}

export default UserProfile;
