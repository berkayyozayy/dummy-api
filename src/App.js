import { Routes, Route } from "react-router-dom";

import Posts from "presentation/components/posts/posts.js";
import Users from "presentation/components/users/users.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
