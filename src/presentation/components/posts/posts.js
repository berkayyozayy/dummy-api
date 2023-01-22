import React, { useState, useEffect } from "react";
import { PostsWrapper, PostsContent } from "./posts.styled";
import Error from "presentation/components/common/error/error";
import LoadingSpinner from "presentation/components/common/loading/loading";
import SearchInput from "presentation/components/search-input/search-input";
import { searchPosts } from "lib/searchPosts.js";

import Post from "presentation/components/post/post";
import config from "config";
import useAPI from "presentation/hooks/useAPI";

import { useNavigate } from "react-router-dom";

function Posts({ handleClick }) {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const postsUrl = `${config.postsUrl}`;
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const { data, error, loading } = useAPI(postsUrl, page);

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
      setPosts(data.data);
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
    <PostsWrapper>
      <SearchInput onChange={onInputChange} />
      <PostsContent>
        {searchPosts(posts, search).map((post) => {
          return (
            <Post
              onClick={() => navigate(`user/${post.owner.id}`)}
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
