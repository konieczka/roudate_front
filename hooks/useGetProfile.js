import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import {
  establishProfile,
  establishProfileSuccess,
  establishProfileFailure,
} from "redux_logic/actions/currentUser";

const userProfileQuery = gql`
  query userProfileQuery {
    me {
      pk
      email
      name
      birthday
      profile {
        gender
        aboutMe
        company
        company
        jobTitle
        school
        interests {
          favBook
          favMovie
          favMusic
          favFood
        }
        preferences {
          interestedIn
          ageMin
          ageMax
          distance
        }
      }
    }
  }
`;

const useGetProfile = () => {
  const dispatch = useDispatch();
  const [finishedFetching, setFinishedFetching] = useState(false);
  const { loading, error, data, refetch } = useQuery(userProfileQuery);

  useEffect(() => {
    if (!loading && error) {
      dispatch(establishProfileFailure(error));
    }

    if (!loading && data) {
      dispatch(establishProfile());

      if (!data.me) {
        dispatch(establishProfileFailure("Not logged in"));
      } else {
        dispatch(establishProfileSuccess(data));
      }
      setFinishedFetching(true);
    }
  }, [loading, data, error]);

  return [refetch, loading, finishedFetching];
};

export default useGetProfile;
