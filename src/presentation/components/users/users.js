import React, { useState, useEffect } from "react";
import config from "config";
import useAPI from "presentation/hooks/useAPI";
import Error from "presentation/components/common/error/error";
import LoadingSpinner from "presentation/components/common/loading/loading";
import { UsersList, UserCard } from "./users.styled";
import User from "presentation/components/user/user";
import SearchInput from "presentation/components/search-input/search-input";
import { searchUsers } from "lib/searchUsers.js";

import { useNavigate } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const usersUrl = `${config.usersUrl}`;
  const { data, error, loading } = useAPI(usersUrl, page);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 1
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  useEffect(() => {
    if (!loading && !error) {
      setUsers((prev) => [...prev, ...data.data]);
    }
  }, [data]);

  const onInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  if (error) {
    return <Error message={error.message} />;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <SearchInput onChange={onInputChange} />
      <UsersList>
        {searchUsers(users, search).map((user) => {
          return (
            <UserCard key={user.id}>
              <User
                onClick={() => navigate(`/user/${user.id}`)}
                title={user.title}
                avatarUrl={user.picture}
                name={user.firstName}
                lastname={user.lastName}
              />
            </UserCard>
          );
        })}
      </UsersList>{" "}
    </>
  );
}

export default Users;
