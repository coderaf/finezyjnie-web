import React from 'react';
import Text from '../../../components/Text/Text';
import { pageContent } from '../pageContent';
import Category from './Category';
import { Category as CategoryProps } from '../../../types/common';

interface Props {
  categories: CategoryProps[];
}

function Categories({ categories }: Props) {
  return (
    <>
      <Text variant="dHeadline2" marginBottom={16}>
        {pageContent.categoriesTitle}
      </Text>

      {categories.map((category) => (
        <Category category={category} key={category.id} />
      ))}
    </>
  );
}

export default Categories;
