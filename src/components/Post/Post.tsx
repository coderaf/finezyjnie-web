import React, { ReactElement } from 'react';
import { Post as PostProps } from '../../api/blog/types';
import { format } from 'date-fns';
import * as styles from './Post.styles';
import Text from '../Text/Text';
import { truncateString } from '../../utils/truncateString';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

interface Props {
  post: PostProps;
}

// todo: change name to PostCard and props also
function Post({ post }: Props): ReactElement {
  const navigate = useNavigate();

  const formattedDate = format(new Date(post.createdAt), 'MMMM d, yyyy');
  const desktopImage = post.images.large[0];
  const mobileImage = post.images.small[0];

  const handlePostClick = () => {
    navigate(`${PATHS.BLOG}/${post.id}`);
  };

  return (
    <div css={styles.post} onClick={handlePostClick}>
      <div css={styles.postHeader}>
        <Text variant="body16" marginBottom={8}>
          {post.title}
        </Text>
        <Text variant="body14">{formattedDate}</Text>
      </div>
      <div css={styles.postImage(desktopImage, mobileImage)}></div>
      <div css={styles.postContent}>
        <Text variant="body16">{truncateString(post.content, 150)}</Text>
      </div>
    </div>
  );
}

export default Post;
