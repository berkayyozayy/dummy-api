import React from "react";
import { Link } from "react-router-dom";
import home from "presentation/icons/home.svg";
import users from "presentation/icons/users.svg";

import { Nav, NavLeft, Main, UserList } from "./header.styled";

function Header() {
  return (
    <Nav>
      <NavLeft>
        <Main>
          <Link to="/">
            <img src={home} width={40} alt="Home" />
          </Link>
        </Main>
        <UserList>
          <Link to="/users">
            <img src={users} width={40} alt="Users" />
          </Link>
        </UserList>
      </NavLeft>
    </Nav>
  );
}

export default Header;
