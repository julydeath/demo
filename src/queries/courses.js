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
