import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../../api/blog';
import * as styles from './Blog.styles';
import { homeSection, container } from '../../styles/commonStyles';
import Spinner from '../../components/Spinner/Spinner';
import PostCard from '../../components/PostCard/PostCard';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

function Blog() {
  const { isPending, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(),
  });

  return (
    <div css={[homeSection, container]}>
      {isPending && <Spinner />}

      {error && <ErrorMessage />}

      <div css={styles.posts}>
        {data?.posts.map((post) => (
          <div css={styles.postCardWrapper} key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
