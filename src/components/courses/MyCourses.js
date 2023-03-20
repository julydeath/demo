import React from 'react';
import { Box } from '@chakra-ui/react';
import { MyCourseCard } from './MyCourseCard';
import { products } from './_data';
import { ProductGrid } from './ProductGrid';

const MyCourses = () => {
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{
        base: '4',
        md: '8',
        lg: '12',
      }}
      py={{
        base: '6',
        md: '8',
        lg: '12',
      }}
    >
      <ProductGrid>
        {products.map(product => (
          <MyCourseCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </Box>
  );
};

export default MyCourses;
