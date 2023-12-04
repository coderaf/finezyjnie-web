import React from 'react';
import Text from '../../../components/Text/Text';
import Category from './Category';
import { Category as CategoryProps } from '../../../types/common';

interface Props {
  categories: CategoryProps[];
}

function Categories({ categories }: Props) {
  const initialCategory = {
    id: '123',
    name: 'wszystkie',
  };

  return (
    <>
      <Text variant="dHeadline2" marginBottom={16}>
        Wybierz kategorie
      </Text>

      {categories.map((category) => (
        <Category category={category} key={category.id} />
      ))}
      <Category category={initialCategory} />
    </>
  );
}

export default Categories;
