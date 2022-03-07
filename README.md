# @apollo/client mutation onCompleted contains stale data

Whenever a mutation's `onCompleted` hook references data from a query that is being updated by the mutation, the data reference is stale.
It contains old data representing the initial load rather than the result from the mutation.

## Instructions

1. Run `npm install`
2. Run `npm test` for the reproduction, I've added console.log statements to illustrate the problem

## Notes

All the code is contained in `TestComponent.tsx`. `TestComponent.test.tsx` contains a test to reproduce/demonstrate the problem.

