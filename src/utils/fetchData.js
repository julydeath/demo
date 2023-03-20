import axios from 'axios';
const graphQLEndpoint = 'https://elegant-halibut-68.hasura.app/v1/graphql';

const fetchData = async (query, { variables = {}, headersFromClient = {} }) => {
  const headers = {
    'Content-Type': 'application/json',
    ...headersFromClient,
  };

  try {
    const { data } = await axios({
      url: graphQLEndpoint,
      method: 'POST',
      headers: headers,
      data: { query, variables },
    });

    return data;
  } catch (error) {
    throw new Error();
  }
};

export default fetchData;
