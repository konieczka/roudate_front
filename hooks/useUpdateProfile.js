import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

const updateUserProfileMutation = gql`
  mutation updateUserProfileMutation($id: ID!, $profileInput: ProfileInput!) {
    updateProfile(id: $id, input: $profileInput) {
      success
      profile {
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

const useUpdateProfile = () => {
  const { id, profile } = useSelector((state) => state.currentUser);
  const [finishedFetching, setFinishedFetching] = useState(false);
  const [updateProfile, { error, loading, data }] = useMutation(
    updateUserProfileMutation
  );

  useEffect(() => {
    setFinishedFetching(false);
  }, [profile]);

  useEffect(() => {
    if (!loading && data) {
      setFinishedFetching(true);
    }
  }, [loading, data, error]);
  // TODO: Handle errors

  const onUpdate = (profileInput) => {
    updateProfile({
      variables: { id, profileInput },
    });
  };

  return [onUpdate, loading, finishedFetching];
};

export default useUpdateProfile;
