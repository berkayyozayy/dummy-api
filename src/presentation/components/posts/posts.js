import React, { useState, useEffect } from "react";
import { PostsWrapper, PostsContent } from "./posts.styled";
import Error from "presentation/components/common/error/error";
import LoadingSpinner from "presentation/components/common/loading/loading";

import Post from "presentation/components/post/post";
import config from "config";
import useAPI from "presentation/hooks/useAPI";

function Posts() {
  const [posts, setPosts] = useState([]);
  const postsUrl = `${config.postsUrl}`;
  const { data, error, loading } = useAPI(postsUrl);

  useEffect(() => {
    if (!loading && !error) {
      setPosts(data);
    }
  }, [data, error, loading]);

  if (error) {
    return <Error message={error.message} />;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <PostsWrapper>
      <PostsContent>
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              avatarUrl={post.owner.picture}
              imageUrl={post.image}
              altText={post.text}
              name={post.owner.firstName}
              lastname={post.owner.lastName}
              description={post.text}
              date={post.publishDate}
              count={post.likes}
              tags={post.tags.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
            />
          );
        })}
      </PostsContent>
    </PostsWrapper>
  );
}

export default Posts;
