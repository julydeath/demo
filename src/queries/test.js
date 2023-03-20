import fetchData from '../utils/fetchData';
export const getTestData = async () => {
  const data = await fetchData(
    `query MyQuery {
      courses {
        id
        name
        price
        salePrice
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
