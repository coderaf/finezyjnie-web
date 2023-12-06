import React, { ReactElement } from 'react';
import { Post as PostProps } from '../../api/blog/types';
import * as styles from './PostCard.styles';
import Text from '../Text/Text';
import { truncateString } from '../../utils/truncateString';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../routes/paths';
import { formatDate } from '../../utils/formatDate';

interface Props {
  post: PostProps;
}

function PostCard({ post }: Props): ReactElement {
  const navigate = useNavigate();

  const mobileImage = post.images.small[0];

  const handlePostClick = () => {
    navigate(`${PATHS.BLOG_POST}/${post.id}`);
  };

  return (
    <div css={styles.postCard} onClick={handlePostClick}>
      <div css={styles.postCardHeader}>
        <Text variant="body16" marginBottom={8}>
          {post.title}
        </Text>
        <Text variant="body14">{formatDate(post.createdAt)}</Text>
      </div>
      <div css={styles.postCardImage(mobileImage)}></div>
      <div css={styles.postCardContent}>
        <Text variant="body16">{truncateString(post.content, 150)}</Text>
      </div>
    </div>
  );
}

export default PostCard;
