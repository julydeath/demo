import React from 'react';
import { Box, Center, CircularProgress } from '@chakra-ui/react';
import { ProductCard } from './ProductCard';
// import { products } from './_data';
import { ProductGrid } from './ProductGrid';
import { useQuery } from 'react-query';
import { getAllCoursesData } from '../../queries/courses';

const CoursePage = () => {
  const {
    status,
    data: products,
    error,
    isFetching,
    isSuccess,
  } = useQuery('allCourses', async () => await getAllCoursesData());

  if (isSuccess) {
    if (products?.length === 0) {
      return <div>No Courses Enroleed</div>;
    }
  }

  if (isFetching && !products)
    return (
      <Center>
        <CircularProgress isIndeterminate color="purple.300" />
      </Center>
    );
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
        {products?.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </Box>
  );
};

export default CoursePage;
