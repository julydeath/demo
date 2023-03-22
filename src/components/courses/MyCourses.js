import React from 'react';
import { Box } from '@chakra-ui/react';
import { MyCourseCard } from './MyCourseCard';
import { useQuery } from 'react-query';
import { ProductGrid } from './ProductGrid';
import { getAllEnrolledCoursesData } from '../../queries/courses';
import { useUserAuth } from '../../context/UserAuthContext';
import { Center, CircularProgress } from '@chakra-ui/react';

const MyCourses = () => {
  const { user } = useUserAuth();
  console.log(user.accessToken);
  const {
    status,
    data: products,
    error,
    isFetching,
    isSuccess,
  } = useQuery(
    'enrolledCourses',
    async () => await getAllEnrolledCoursesData(user?.accessToken)
  );

  if (isFetching) {
    <Center>
      <CircularProgress isIndeterminate color="purple.300" />
    </Center>;
  }

  if (isSuccess) {
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
            <MyCourseCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </Box>
    );
  }
};

export default MyCourses;
