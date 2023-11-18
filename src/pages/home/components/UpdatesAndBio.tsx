import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../../../api/blog';
import Text from '../../../components/Text/Text';
import * as styles from './UpdatesAndBio.styles';
import * as commonStyles from '../../../styles/commonStyles';
import Post from '../../../components/Post/Post';
import pageContent from '../pageContent';
import Spinner from '../../../components/Spinner/Spinner';
import { showToast } from '../../../utils/showToast';

function UpdatesAndBio() {
  const { isPending, error, data } = useQuery({
    queryKey: ['posts', { page: 1, pageSize: 10 }],
    queryFn: () => fetchPosts({ page: 1, pageSize: 1 }),
  });

  if (error) {
    showToast('error', error.message);
  }

  return (
    <section css={[commonStyles.container, styles.updatesAndBio]}>
      <div css={styles.postWrapper}>
        <div css={[styles.titleWrapper, commonStyles.hideMobile]}>
          <Text variant="dHeadline5" color="main" uppercase>
            {pageContent.updatesTitle}
          </Text>
        </div>
        <div css={[styles.titleWrapper, commonStyles.hideDesktop]}>
          <Text variant="mHeadline5" color="main" uppercase>
            {pageContent.updatesTitle}
          </Text>
        </div>

        {isPending && <Spinner />}

        {error && (
          <Text variant="body16" color="error">
            {error.message}
          </Text>
        )}

        {data?.posts.map((post) => <Post key={post.id} {...post} />)}
      </div>

      <div css={styles.bioWrapper}>
        <div css={[styles.titleWrapper, commonStyles.hideMobile]}>
          <Text variant="dHeadline5" color="main" uppercase>
            {pageContent.bioTitle}
          </Text>
        </div>

        <div css={[styles.titleWrapper, commonStyles.hideDesktop]}>
          <Text variant="mHeadline5" color="main" uppercase>
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
