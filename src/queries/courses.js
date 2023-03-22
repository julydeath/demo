import fetchData from '../utils/fetchData';
export const getAllCoursesData = async () => {
  const data = await fetchData(
    `query AllCourses {
      courses {
        id
        imageUrl
        name
        price
        salePrice
        currency
      }
    }
  `,
    {
      variables: {},
      headersFromClient: {},
    }
  );

  return data.data.courses;
};

export const getAllEnrolledCoursesData = async accessToken => {
  const data = await fetchData(
    `query AllEnrolledCourses {
      courses {
        id
        imageUrl
        name
        price
        salePrice
        currency
      }
    }
  `,
    {
      variables: {},
      headersFromClient: { Authorization: `Bearer ${accessToken}` },
    }
  );

  return data.data.courses;
};

export const enrollToACourse = async (course_id, accessToken) => {
  const data = await fetchData(
    `mutation EnrollCourseUser ($course_id: Int) {
      insert_enrollments_one(object: {course_id: $course_id}) {
        id
        user_id
        updated_at
      }
    }
  `,
    {
      variables: { course_id: course_id },
      headersFromClient: { Authorization: `Bearer ${accessToken}` },
    }
  );

  return data.data.insert_enrollments_one;
};

export const getCourseDetails = async (course_id, accessToken) => {
  const data = await fetchData(
    `query getCourseDetails($courseId: Int) {
      sections(where: {course_id: {_eq: $courseId}}) {
        id
        name
        chapters {
          id
          name
          content
          metadata {
            read
          }
        }
      }
    }
  `,
    {
      variables: { courseId: course_id },
      headersFromClient: { Authorization: `Bearer ${accessToken}` },
    }
  );

  return data.data.sections;
};

export const getChapterDetails = async (chapter_id, accessToken) => {
  const data = await fetchData(
    `query getChapterDetails($chapter_id: Int!) {
      chapters_by_pk(id: $chapter_id) {
        id
        name
        content
      }
    }
  `,
    {
      variables: { chapter_id: chapter_id },
      headersFromClient: { Authorization: `Bearer ${accessToken}` },
    }
  );

  return data.data.chapters_by_pk;
};

export const makeChapterAsRead = async (chapter_id, accessToken) => {
  const data = await fetchData(
    `mutation updateChapterMetadata($chapter_id:Int) {
      insert_metadata_one(object: {chapter_id: $chapter_id, read: true}) {
        read
        id
      }
    }
  `,
    {
      variables: { chapter_id: chapter_id },
      headersFromClient: { Authorization: `Bearer ${accessToken}` },
    }
  );

  return data.data.insert_metadata_one;
};
