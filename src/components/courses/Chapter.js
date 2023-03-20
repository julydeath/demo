import React from 'react';
import CourseDetailsLayout from './CourseDetailsLayout';
import { VStack, Card, Heading, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const Chapter = () => {
  const { chapter, section } = useParams();

  return (
    <CourseDetailsLayout>
      <Card>
        <VStack>
          <Heading size="xl">{`Section ${section} - Chapter ${chapter}`}</Heading>
          <Text maxW="1080" py={2} px={8}>
            This is chapter one content and consists of Build fullstack React.js
            applications with Node.js,Express.js & MongoDB MERN with this
            project-focused course. This is chapter one content and consists of
            Build fullstack React.js applications with Node.js,Express.js &
            MongoDB MERN with this project-focused course.
          </Text>
        </VStack>
      </Card>
    </CourseDetailsLayout>
  );
};

export default Chapter;
