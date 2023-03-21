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
