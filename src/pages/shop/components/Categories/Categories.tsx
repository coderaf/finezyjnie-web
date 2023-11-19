import React from 'react';
import Text from '../../../../components/Text/Text';
import { pageContent } from '../../pageContent';

// todo: remove mock when API is ready
const categories = ['Koszulki', 'Bluzy', 'Spodnie', 'Kurtki'];

function Categories() {
  // todo: mobile version and data from backend
  return (
    <>
      <Text variant="dHeadline5" marginBottom={16}>
        {pageContent.categoriesTitle}
      </Text>

      {categories.map((category) => (
        <Text key={category} variant="body16" marginBottom={8}>
          {category}
        </Text>
      ))}
    </>
  );
}

export default Categories;
