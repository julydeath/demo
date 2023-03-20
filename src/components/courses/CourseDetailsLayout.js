import {
  Box,
  VStack,
  Image,
  HStack,
  Card,
  Center,
  Heading,
  Text,
  Grid,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const CourseDetailsLayout = ({ children }) => {
  const { id: courseId } = useParams();

  const data = [
    {
      id: 1,
      name: 'section 1',
      chapters: [
        {
          id: 1,
          name: 'chapter 1',
          read: true,
        },
        {
          id: 2,
          name: 'chapter 2',
          read: true,
        },
        {
          id: 3,
          name: 'chapter 3',
          read: false,
        },
      ],
    },
    {
      id: 2,
      name: 'section 2',
      chapters: [
        {
          id: 1,
          name: 'chapter 1',
          read: false,
        },
        {
          id: 2,
          name: 'chapter 2',
          read: false,
        },
      ],
    },
    {
      id: 3,
      name: 'section 3',
      chapters: [
        {
          id: 1,
          name: 'chapter 1',
          read: false,
        },
        {
          id: 2,
          name: 'chapter 2',
          read: false,
        },
      ],
    },
    {
      id: 4,
      name: 'section 4',
      chapters: [
        {
          id: 1,
          name: 'chapter 1',
          read: false,
        },
      ],
    },
  ];

  return (
    <VStack m={10}>
      <Box>
        <Image
          src="https://picsum.photos/1080/400"
          alt="Dan Abramov"
          borderRadius="md"
        />
      </Box>
      <Box>
        <Card width="full" p={2} m={2}>
          <Center>
            <Heading>This is the Name of the Course</Heading>
          </Center>
          <Center>
            <Text>
              Written by <span>PLP</span>
            </Text>
          </Center>
        </Card>

        <HStack width="full" p={2}>
          <Grid h="100vh" gap={4} templateColumns="repeat(5, 1fr)">
            <GridItem colSpan={1}>
              <Card>
                <VStack>
                  <Accordion defaultIndex={[0]} allowMultiple width="full">
                    {data.map(section => {
                      return (
                        <AccordionItem key={section.id}>
                          <AccordionButton>
                            <Box as="span" flex="1" textAlign="left">
                              {section.name}
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>

                          <AccordionPanel pb={4}>
                            {section.chapters.map(({ id, name, read }) => {
                              return (
                                <HStack key={id} justify="space-between">
                                  <Link
                                    as={RouterLink}
                                    to={`/my-courses/read/${courseId}/${section.id}/${id}`}
                                  >
                                    <Text>{name}</Text>
                                  </Link>

                                  <FaCheckCircle color={read ? 'green' : ''} />
                                </HStack>
                              );
                            })}
                          </AccordionPanel>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                </VStack>
              </Card>
            </GridItem>
            <GridItem colSpan={4} width="full">
              {children}
            </GridItem>
          </Grid>
        </HStack>
      </Box>
    </VStack>
  );
};

export default CourseDetailsLayout;
