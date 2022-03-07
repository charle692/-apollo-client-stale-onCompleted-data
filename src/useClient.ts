import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { useMemo } from "react";

import { createUploadLink } from "apollo-upload-client";

const useClient = () => {
  const getLink = () => {
    const uploadLink = createUploadLink({
      uri: "/api/graphql",
      credentials: "same-origin"
    });

    return ApolloLink.from([uploadLink]);
  };

  const getClient = () => {
    return new ApolloClient({
      link: getLink(),
      cache: new InMemoryCache({})
    });
  };

  return useMemo(getClient, []);
};

export { useClient };
