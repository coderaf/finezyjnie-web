import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../../../api/blog';
import Text from '../../../components/Text/Text';
import * as styles from './UpdatesAndBio.styles';
import * as commonStyles from '../../../styles/commonStyles';
import Post from '../../../components/Post/Post';
import { pageContent } from '../pageContent';
import Spinner from '../../../components/Spinner/Spinner';
import { showToast } from '../../../utils/showToast';
import { useMediaQueries } from '../../../hooks/useMediaQueries';

function UpdatesAndBio() {
  const { isPending, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetchPosts({ page: 1, pageSize: 1 }),
  });

  const { isMobile } = useMediaQueries();

  if (error) {
    showToast('error', error.message);
  }

  return (
    <section css={[commonStyles.container, styles.updatesAndBio]}>
      <div css={styles.postWrapper}>
        <Text variant={isMobile ? 'mHeadline5' : 'dHeadline5'} color="main" uppercase>
          {pageContent.updatesTitle}
        </Text>

        {isPending && <Spinner />}

        {error && (
          <Text variant="body16" color="error">
            {error.message}
          </Text>
        )}

        {data?.posts.map((post) => <Post key={post.id} {...post} />)}
      </div>

      <div css={styles.bioWrapper}>
        <Text variant={isMobile ? 'mHeadline5' : 'dHeadline5'} color="main" uppercase>
          {pageContent.bioTitle}
        </Text>

        <div css={styles.bio}>
          <Text variant="body16" color="white">
            {pageContent.bioDescription}
          </Text>
        </div>
      </div>
    </section>
  );
}

export default UpdatesAndBio;
