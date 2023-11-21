import React from 'react';
import Text from '../../../components/Text/Text';
import { pageContent } from '../pageContent';
import Category from './Category/Category';

// todo: remove mock when API is ready
const categories = ['koszulki', 'bluzy', 'spodnie', 'kurtki'];

function Categories() {
  // todo: mobile version and data from backend
  return (
    <>
      <Text variant="dHeadline2" marginBottom={16}>
        {pageContent.categoriesTitle}
      </Text>

      {categories.map((category) => (
        <Category category={category} key={category} />
      ))}
    </>
  );
}

export default Categories;
