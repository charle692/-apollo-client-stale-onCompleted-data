import React, { FC } from "react";

import { gql, useMutation, useQuery } from "@apollo/client";

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

interface Props {
  onMutationCompleted: (data: any) => void;
}

const TestComponent: FC<Props> = ({ onMutationCompleted }) => {
  const { data, loading } = useQuery(QUERY);

  console.log({ queryData: JSON.stringify(data), loading });

  const [callMutation] = useMutation(MUTATION, {
    onCompleted: () => {
      console.log({ dataInOnCompleted: JSON.stringify(data) });

      // will be called with stale data
      onMutationCompleted(data);
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
    </div>
  );
};

export { TestComponent, QUERY, MUTATION };
