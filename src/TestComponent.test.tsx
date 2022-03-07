import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { act, render, screen } from "@testing-library/react";
import { TestComponent, MUTATION, QUERY } from "./TestComponent";
import userEvent from "@testing-library/user-event";

const USER_ID = "1";

describe("TestComponent", () => {
  const queryMock = {
    request: {
      query: QUERY
    },
    result: {
      data: {
        user: {
          id: USER_ID,
          isNew: true,
          __typename: "User"
        }
      }
    }
  };

  const mutationMock = {
    request: {
      query: MUTATION
    },
    result: {
      data: {
        user: {
          id: USER_ID,
          isNew: false,
          __typename: "User"
        }
      }
    }
  };

  const wait = async () => {
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
  }

  const renderScreen = () => {
    render(
      <MockedProvider mocks={[queryMock, mutationMock]}>
        <TestComponent />
      </MockedProvider>
    );
  };

  it("contains stale data in useMutation onCompleted", async () => {
    renderScreen();

    // wait for query to finish
    await wait();

    userEvent.click(screen.getByRole("button", { name: "Call mutation" }));

    // wait for mutation to finish
    await wait();

    expect(screen.getByTestId("Success!")).toBeInTheDocument();
  });
});
