import React from 'react';
import CourseDetailsLayout from './CourseDetailsLayout';
import { VStack, Card, Heading, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContext';
import { useQuery } from 'react-query';
import { getChapterDetails } from '../../queries/courses';

const Chapter = () => {
  const { chapter, section } = useParams();
  const { user } = useUserAuth();

  const { status, data, error, isFetching, isSuccess } = useQuery(
    'getChapterDetails',
    async () => await getChapterDetails(chapter, user?.accessToken)
  );

  if (isFetching && !data) {
    return <div>Loading</div>;
  }

  return (
    <CourseDetailsLayout>
      <Card>
        <VStack>
          <Heading size="xl">{`Section ${section} - Chapter ${chapter}`}</Heading>
          <Text maxW="1080" py={2} px={8}>
            {data?.content}
          </Text>
        </VStack>
      </Card>
    </CourseDetailsLayout>
  );
};

export default Chapter;
