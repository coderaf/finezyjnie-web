import React from 'react';
import * as styles from './Category.styles';
import { PATHS } from '../../../routes/paths';
import { useNavigate } from 'react-router-dom';
import { capitalize } from '../../../utils/capitalize';
import { Category as CategoryProps } from '../../../types/common';
import { Link } from 'react-router-dom';

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
      <Link to={`${PATHS.SHOP}/${category.name}`}>{capitalize(category.name)}</Link>
    </div>
  );
}

export default Category;
