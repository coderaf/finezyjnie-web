import React, { ReactElement } from 'react';
import { PostResponseDto } from '../../api/blog/types';
import { format } from 'date-fns';
import * as styles from './Post.styles';
import Text from '../Text/Text';
import { truncateString } from '../../utils/truncateString';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

const fallbackDesktopImage = 'https://picsum.photos/400/600';
const fallbackMobileImage = 'https://picsum.photos/200/300';

function Post({ title, content, createdAt, images, id }: PostResponseDto): ReactElement {
  const formattedDate = format(new Date(createdAt), 'MMMM d, yyyy');
  const desktopImage =
    images && images.length > 0 && images[0].large && images[0].large.length > 0
      ? images[0].large[0]
      : fallbackDesktopImage;

  const mobileImage =
    images && images.length > 0 && images[0].small && images[0].small.length > 0
      ? images[0].small[0]
      : fallbackMobileImage;

  const navigate = useNavigate();

  const handlePostClick = () => {
    navigate(`${PATHS.BLOG}/${id}`);
  };

  return (
    <div css={styles.post} onClick={handlePostClick}>
      <div css={styles.postHeader}>
        <Text variant="body16" marginBottom={8}>
          {title}
        </Text>
        <Text variant="body14">{formattedDate}</Text>
      </div>
      <div css={styles.postImage(desktopImage, mobileImage)}></div>
      <div css={styles.postContent}>
        <Text variant="body16">{truncateString(content, 150)}</Text>
      </div>
    </div>
  );
}

export default Post;
