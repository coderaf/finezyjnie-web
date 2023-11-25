import React from 'react';
import * as styles from './Category.styles';
import { PATHS } from '../../../routes/paths';
import Text from '../../../components/Text/Text';
import { useNavigate } from 'react-router-dom';
import { capitalize } from '../../../utils/capitalize';
import { Category as CategoryProps } from '../../../types/common';

interface Props {
  category: CategoryProps;
}

function Category({ category }: Props) {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate(`${PATHS.SHOP}/${category.name}`);
  };

  return (
    <div css={styles.category} onClick={handleCategoryClick}>
      <Text key={category.id} variant="body16" marginBottom={8}>
        {capitalize(category.name)}
      </Text>
    </div>
  );
}

export default Category;
