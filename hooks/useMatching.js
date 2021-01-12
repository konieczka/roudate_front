import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

const startMatchingMutation = gql`
  mutation startMatchingMutation($input: MatchingInput!) {
    startMatching(input: $input) {
      success
      matched {
        id
        aboutMe
      }
    }
  }
`;

const useMatching = () => {
  const [matchingStarted, setMatchingStarted] = useState(false);
  const [loopCounter, setLoopCounter] = useState(0);

  const [runMutation, { loading, data, error }] = useMutation(
    startMatchingMutation,
    {
      onCompleted: (data) => {
        if (data.startMatching.success) {
          setMatchingStarted(false);
          setLoopCounter(0);
          console.log("SUCCESS!", data.startMatching.matched);
        }
      },
    }
  );

  const triggerMatching = () => {
    setMatchingStarted(true);
  };

  console.log("MATCHING STATUS:", loading, data, error);

  useEffect(() => {
    if (matchingStarted && !loading) {
      if (loopCounter < 10) {
        setLoopCounter(loopCounter + 1);
        runMutation({
          variables: {
            input: {
              isMatching: true,
            },
          },
        });
      } else if (loopCounter >= 10) {
        setMatchingStarted(false);
        setLoopCounter(0);
      }
    }
  }, [matchingStarted, setLoopCounter, loopCounter, runMutation, loading]);

  return triggerMatching;
};

export default useMatching;
