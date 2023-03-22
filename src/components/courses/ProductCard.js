import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { FavouriteButton } from './FavouriteButton';
import { PriceTag } from './PriceTag';
import { enrollToACourse } from '../../queries/courses';
import { useQuery } from 'react-query';
import { useUserAuth } from '../../context/UserAuthContext';
import { Link, useHistory } from 'react-router-dom';

export const ProductCard = props => {
  const { product, rootProps } = props;
  const { name, imageUrl, price, salePrice, id } = product;
  const { user } = useUserAuth();
  const history = useHistory();

  const {
    status,
    data: products,
    error,
    isFetching,
    isSuccess,
    refetch,
  } = useQuery(
    'enrolledCourses',
    async () => await enrollToACourse(id, user?.accessToken),
    { manual: true }
  );

  return (
    <Stack
      spacing={{
        base: '4',
        md: '5',
      }}
      {...rootProps}
    >
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={imageUrl}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={{
              base: 'md',
              md: 'xl',
            }}
          />
        </AspectRatio>
        <FavouriteButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${name} to your favourites`}
        />
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text
            fontWeight="medium"
            // color={useColorModeValue('gray.700', 'gray.400')}
          >
            {name}
          </Text>
          <PriceTag price={price} salePrice={salePrice} currency="USD" />
        </Stack>
        <HStack></HStack>
      </Stack>
      <Stack align="center">
        {user?.accessToken ? (
          <Button colorScheme="purple" width="full" onClick={refetch}>
            Enroll Course
          </Button>
        ) : (
          <Button
            colorScheme="purple"
            width="full"
            onClick={() => history.push('/login')}
          >
            Enroll Course
          </Button>
        )}
      </Stack>
    </Stack>
  );
};
