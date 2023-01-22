import { Routes, Route } from "react-router-dom";

import Posts from "presentation/components/posts/posts.js";
import Users from "presentation/components/users/users.js";
import Header from "presentation/components/header/header.js";
import UserProfile from "presentation/components/user-profile/user-profile.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
