import {
  Box,
  Button,
  Circle,
  Heading,
  HStack,
  Icon,
  List,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { FiCheck } from 'react-icons/fi';
import { PricingCardBadge } from './PricingCardBadge';

export const PricingCard = props => {
  const { product } = props;
  return (
    <Box
      bg="bg-surface"
      borderRadius="2xl"
      boxShadow="lg"
      px={{
        base: '6',
        md: '8',
      }}
      py="8"
      position="relative"
      overflow="hidden"
    >
      {product.isPopular && (
        <PricingCardBadge>
          <Text fontWeight="medium">Popular</Text>
        </PricingCardBadge>
      )}
      <Stack spacing="8" textAlign="center">
        <Stack spacing="5" align="center">
          <Stack spacing="4">
            <Heading
              size={{
                base: 'md',
                md: 'lg',
              }}
            >
              {product.price}
            </Heading>
            <Stack spacing="1">
              <Text fontSize="xl" fontWeight="semibold">
                {product.name}
              </Text>
              <Text color="muted">{product.description}</Text>
            </Stack>
          </Stack>
        </Stack>
        <List as="ul" spacing="4">
          {product.features.map(feature => (
            <HStack key={feature} as="li" spacing="3">
              <Circle size="6" bg={mode('purple.50', 'whiteAlpha.50')}>
                <Icon as={FiCheck} color="accent" />
              </Circle>
              <Text color="muted">{feature}</Text>
            </HStack>
          ))}
        </List>
        <Button variant="primary" size="lg">
          Get started
        </Button>
      </Stack>
    </Box>
  );
};
