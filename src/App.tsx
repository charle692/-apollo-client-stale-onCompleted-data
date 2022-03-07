import React from "react";

import { ApolloProvider } from "@apollo/client";
import { TestComponent } from "./TestComponent";
import { useClient } from "./useClient";

export default function App() {
  const client = useClient();

  return (
    <ApolloProvider client={client}>
      <TestComponent />
    </ApolloProvider>
  );
}
