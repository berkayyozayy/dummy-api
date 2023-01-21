import React, { useState, useEffect } from "react";
import config from "config";
import useAPI from "presentation/hooks/useAPI";
import Error from "presentation/components/common/error/error";
import LoadingSpinner from "presentation/components/common/loading/loading";
import { UsersList, UserCard } from "./users.styled";
import User from "presentation/components/user/user";

function Users() {
  const [users, setUsers] = useState([]);

  const usersUrl = `${config.usersUrl}`;
  const { data, error, loading } = useAPI(usersUrl);

  useEffect(() => {
    if (!loading && !error) {
      setUsers(data);
    }
  }, [data]);

  if (error) {
    return <Error message={error.message} />;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <UsersList>
      {users.map((user) => {
        return (
          <UserCard key={user.id}>
            <User
              title={user.title}
              avatarUrl={user.picture}
              name={user.firstName}
              lastname={user.lastName}
            />
          </UserCard>
        );
      })}
    </UsersList>
  );
}

export default Users;
