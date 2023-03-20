import { Center } from '@chakra-ui/react';

export const PricingCardBadge = props => (
  <Center
    bg="accent"
    color="inverted"
    position="absolute"
    right={-10}
    top={5}
    transform="rotate(45deg)"
    py="2"
    px="12"
    {...props}
  />
);
