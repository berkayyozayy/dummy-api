import "./App.css";
import Post from "presentation/components/post/post.js";
function App() {
  return (
    <div className="App">
      <Post
        avatarUrl="https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
        altText="user-image"
        name="Berkay"
        lastname="Özay"
        description="Study Case"
        date="23232"
        count="2321"
        tags="afawefae"
      />
    </div>
  );
}

export default App;
