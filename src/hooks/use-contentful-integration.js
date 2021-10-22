const contentful = require("contentful");

const useContentfulIntegration = () => {
  console.log("here");
  const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
  });

  return client;
};

export default useContentfulIntegration;
