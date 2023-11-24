import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../../../api/blog';
import Text from '../../../components/Text/Text';
import * as styles from './UpdatesAndBio.styles';
import * as commonStyles from '../../../styles/commonStyles';
import Post from '../../../components/Post/Post';
import { pageContent } from '../pageContent';
import Spinner from '../../../components/Spinner/Spinner';
import { useMediaQueries } from '../../../hooks/useMediaQueries';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';

function UpdatesAndBio() {
  const { isPending, error, data } = useQuery({
    queryKey: ['posts', { page: 1, pageSize: 1 }],
    queryFn: () => fetchPosts({ page: 1, pageSize: 1 }),
  });

  const { isMobile } = useMediaQueries();

  return (
    <section css={[commonStyles.container, styles.updatesAndBio]}>
      <div css={styles.postWrapper}>
        <Text variant={isMobile ? 'mHeadline2' : 'dHeadline2'} color="main" uppercase>
          {pageContent.updatesTitle}
        </Text>

        {isPending && <Spinner />}

        {error && <ErrorMessage />}

        {data?.posts.map((post) => <Post key={post.id} post={post} />)}
      </div>

      <div css={styles.bioWrapper}>
        <div css={styles.titleWrapper}>
          <Text variant={isMobile ? 'mHeadline2' : 'dHeadline2'} color="main" uppercase>
            {pageContent.bioTitle}
          </Text>
        </div>

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
