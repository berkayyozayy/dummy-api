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
  const [page, setPage] = useState(1);

  const { data, error, loading } = useAPI(postsUrl, page);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
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
      setPosts(data);
    }
  }, [data]);

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
