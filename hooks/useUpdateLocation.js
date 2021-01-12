import { useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

const updateLocationMutation = gql`
  mutation updateLocationMutation($id: ID!, $input: LocationInput!) {
    updateLocation(id: $id, input: $input) {
      success
    }
  }
`;

const useUpdateLocation = () => {
  const { id } = useSelector((state) => state.currentUser);
  const [runMutation, { loading }] = useMutation(
    updateLocationMutation
  );

  const onUpdateLocation = () => {
    runMutation({
      variables: {
        id,
        input: {
          longitude: 19.46,
          latitude: 51.75,
        },
      },
    });
  };

  return [onUpdateLocation, loading];
};

export default useUpdateLocation;
