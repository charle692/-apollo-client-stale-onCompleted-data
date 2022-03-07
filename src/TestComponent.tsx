import React from "react";

import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

const QUERY = gql`
  query user {
    user {
      id
      isNew
      __typename
    }
  }
`;

const MUTATION = gql`
  mutation toggle_new {
    user {
      id
      isNew
      __typename
    }
  }
`;

const TestComponent = () => {
  const [renderSuccess, setRenderSuccess] = useState(false);
  const { data, loading } = useQuery(QUERY);

  console.log({ queryData: JSON.stringify(data), loading });

  const [callMutation] = useMutation(MUTATION, {
    onCompleted: () => {
      console.log({ dataInOnCompleted: JSON.stringify(data) });
      setRenderSuccess(!data.user.isNew);
    }
  });

  const handleClick = () => {
    console.log("mutation clicked");
    callMutation();
  };

  return (
    <div className="App">
      <h1>State data in mutation onCompleted reproduction</h1>
      <button onClick={handleClick}>Call mutation</button>
      {renderSuccess && <div>Success!</div>}
    </div>
  );
};

export { TestComponent, QUERY, MUTATION };
