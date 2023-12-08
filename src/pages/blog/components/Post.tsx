import React from 'react';
import { homeSection, container } from '../../../styles/commonStyles';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchPostById, fetchPosts } from '../../../api/blog';
import * as styles from './Post.styles';
import Text from '../../../components/Text/Text';
import Spinner from '../../../components/Spinner/Spinner';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import { formatDate } from '../../../utils/formatDate';
import { useMediaQueries } from '../../../hooks/useMediaQueries';
import PostCard from '../../../components/PostCard/PostCard';

function Post() {
  const params = useParams();
  const { isMobile } = useMediaQueries();

  const { data, error, isPending } = useQuery({
    queryKey: ['post', params.postId],
    queryFn: () => fetchPostById(params.postId!),
  });

  const {
    isPending: isBlogPending,
    error: blogError,
    data: blogData,
  } = useQuery({
    queryKey: ['posts', { page: 1, pageSize: 4 }],
    queryFn: () => fetchPosts({ page: 1, pageSize: 4 }),
  });

  const mobileImage = data?.images.small[0];
  const desktopImage = data?.images.large[0];

  return (
    <div css={[homeSection, container, styles.post]}>
      {isPending && <Spinner />}

      {error && <ErrorMessage />}

      {data && (
        <div css={styles.postWrapper}>
          <Text variant="dHeadline1" marginBottom={16}>
            {data.title}
          </Text>

          <Text variant="body14" marginBottom={32}>
            {formatDate(data.createdAt)}
          </Text>

          <div css={styles.postImageWrapper}>
            <img src={isMobile ? mobileImage : desktopImage} alt="" />
          </div>

          <div css={styles.postContent}>
            <Text variant="body16">{data.content}</Text>
          </div>
        </div>
      )}

      {data && blogData && (
        <div css={styles.postCardList}>
          <Text variant="dHeadline2" marginBottom={32}>
            Przeczytaj również
          </Text>

          {blogData.posts
            .filter((post) => {
              return post.id !== data.id;
            })
            .map((post) => (
              <div css={styles.postCardWrapper} key={post.id}>
                <PostCard post={post} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Post;
