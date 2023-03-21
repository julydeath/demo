import {
  AspectRatio,
  Box,
  Button,
  Image,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FavouriteButton } from './FavouriteButton';

export const MyCourseCard = props => {
  const { product, rootProps } = props;
  const { id, name, imageUrl } = product;
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
            color={useColorModeValue('gray.700', 'gray.400')}
          >
            {name}
          </Text>
        </Stack>
      </Stack>
      <Stack align="center">
        <Link to={`/my-courses/read/${id}`}>
          <Button colorScheme="purple" width="full">
            Read Course
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
};
