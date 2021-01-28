import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { establishMatchedUserSuccess } from "redux_logic/actions/matchedUser";
import { establishChat } from "redux_logic/actions/chat";
import gql from "graphql-tag";

const startMatchingMutation = gql`
  mutation startMatchingMutation($input: MatchingInput!) {
    startMatching(input: $input) {
      success
      matched {
        id
        profiles {
          id
          name
          gender
          aboutMe
          company
          jobTitle
          school
          interests {
            favBook
            favMovie
            favMusic
            favFood
          }
        }
        chat {
          id
        }
      }
    }
  }
`;

const useMatching = () => {
  const { id } = useSelector((state) => state.currentUser);
  const [matchingStarted, setMatchingStarted] = useState(false);
  const [loopCounter, setLoopCounter] = useState(0);
  const dispatch = useDispatch();

  const [runMutation, { loading }] = useMutation(startMatchingMutation, {
    onCompleted: (data) => {
      if (data.startMatching.success) {
        setMatchingStarted(false);
        setLoopCounter(0);

        dispatch(
          establishMatchedUserSuccess(
            data.startMatching.matched.profiles.find(
              (profile) => profile.id !== `${id}`
            )
          )
        );
        dispatch(establishChat(data.startMatching.matched.chat.id));
      }
    },
  });

  const triggerMatching = () => {
    setMatchingStarted(true);
  };

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
