import React from 'react';
import CourseDetailsLayout from './CourseDetailsLayout';
import { VStack, Card, Heading, Text, Box } from '@chakra-ui/react';

const CourseDetails = () => {
  return (
    <CourseDetailsLayout>
      <Card>
        <VStack>
          <Box py={2} px={4}>
            <Heading size="xl">About this Course</Heading>
            <Text>
              Build fullstack React.js applications with Node.js,Express.js &
              MongoDB MERN with this project-focused course.
            </Text>
          </Box>
        </VStack>
      </Card>
    </CourseDetailsLayout>
  );
};

export default CourseDetails;
