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
import { useUserAuth } from '../../context/UserAuthContext';
import { useQuery } from 'react-query';
import { getCourseDetails } from '../../queries/courses';

const CourseDetailsLayout = ({ children }) => {
  const { id: courseId } = useParams();
  const { user } = useUserAuth();

  const { status, data, error, isFetching, isSuccess } = useQuery(
    'allCoursesWithSectionsAndChapters',
    async () => await getCourseDetails(courseId, user?.accessToken)
  );

  console.log(data);

  if (isFetching && !data) {
    return <div>Loading</div>;
  }

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
            {/* <Text>
              Written by <span></span>
            </Text> */}
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
                            {section.chapters.map(({ id, name, metadata }) => {
                              return (
                                <HStack key={id} justify="space-between">
                                  <Link
                                    as={RouterLink}
                                    to={`/my-courses/read/${courseId}/${section.id}/${id}`}
                                  >
                                    <Text>{name}</Text>
                                  </Link>

                                  {metadata.length === 0 && <FaCheckCircle />}

                                  {metadata[0]?.read && (
                                    <FaCheckCircle color="green" />
                                  )}
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
