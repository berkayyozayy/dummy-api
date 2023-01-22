import { Routes, Route } from "react-router-dom";
import Posts from "presentation/components/posts/posts.js";
import Users from "presentation/components/users/users.js";
import UserProfile from "presentation/components/user-profile/user-profile.js";

function HomeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/users" element={<Users />} />
      <Route path="/user/:id" element={<UserProfile />} />
    </Routes>
  );
}

export default HomeRoutes;
