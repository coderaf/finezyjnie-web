import React from 'react';
import * as styles from './Category.styles';
import { PATHS } from '../../../routes/paths';
import Text from '../../../components/Text/Text';
import { useNavigate } from 'react-router-dom';
import { capitalize } from '../../../utils/capitalize';

interface Props {
  category: string;
}

function Category({ category }: Props) {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate(`${PATHS.SHOP}/${category}`);
  };

  return (
    <div css={styles.category} onClick={handleCategoryClick}>
      <Text key={category} variant="body16" marginBottom={8}>
        {capitalize(category)}
      </Text>
    </div>
  );
}

export default Category;
