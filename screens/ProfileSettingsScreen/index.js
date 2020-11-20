import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import useUpdateProfile from "hooks/useUpdateProfile";
import useGetProfile from "hooks/useGetProfile";
import ScreenHeader from "components/ScreenHeader";
import ProfileSettingsInput from "components/ProfileSettingsInput";
import ImageUploader from "components/ImageUploader";
import ProfileSettingsSelect from "components/ProfileSettingsSelect";
import Button from "components/Button";
import Spinner from "components/Spinner";

const mapInputValuesToObject = (inputValues) => {
  let result = {};
  inputValues.forEach(({ field, value }) => {
    result = { ...result, [field]: value };
  });

  return result;
};

const ProfileSettingsScreen = () => {
  const { profile } = useSelector((state) => state.currentUser);
  const [
    refetchProfile,
    isProfileloading,
    hasProfileFinishedFetching,
  ] = useGetProfile();
  const [
    onUpdate,
    isUpdateLoading,
    finishedUpdateFetching,
  ] = useUpdateProfile();

  const [basicInputValues, setBasicInputValues] = useState([
    {
      field: "aboutMe",
      label: "About me",
      placeholder: "Short description about yourself",
      value: "",
    },
    {
      field: "jobTitle",
      label: "Job title",
      placeholder: "Add job title",
      value: "",
    },
    {
      field: "company",
      label: "Company",
      placeholder: "Add company",
      value: "",
    },
    {
      field: "school",
      label: "School",
      placeholder: "Add school",
      value: "",
    },
  ]);

  const [interestsInputValues, setInterestsInputValues] = useState([
    {
      field: "favMovie",
      label: "Favourite movie",
      placeholder: "Add favourite movie",
      value: "",
    },
    {
      field: "favBook",
      label: "Favourite book",
      placeholder: "Add favourite book",
      value: "",
    },
    {
      field: "favMusic",
      label: "Favourite music",
      placeholder: "Add favourite music",
      value: "",
    },
    {
      field: "favFood",
      label: "Favourite food",
      placeholder: "Add favourite food",
      value: "",
    },
  ]);

  useEffect(() => {
    setBasicInputValues(
      basicInputValues.map((inputField) => {
        return {
          ...inputField,
          value: profile[inputField.field],
        };
      })
    );

    setInterestsInputValues(
      interestsInputValues.map((inputField) => {
        return {
          ...inputField,
          value: profile.interests[inputField.field],
        };
      })
    );
  }, [profile]);

  useEffect(() => {
    refetchProfile();
  }, [finishedUpdateFetching]);

  const onSubmit = () => {
    onUpdate(mapInputValuesToObject(basicInputValues));
  };

  const onBasicInputChange = (fieldName) => (value) => {
    setBasicInputValues(
      basicInputValues.map((input) => {
        if (input.field === fieldName) {
          input.value = value;
        }

        return input;
      })
    );
  };

  if (!isProfileloading && hasProfileFinishedFetching) {
    <Spinner />;
  }

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        paddingTop: 75,
      }}
    >
      {isUpdateLoading && <Spinner />}
      <ScreenHeader label="Your Profile" />
      <ScrollView>
        <ImageUploader />
        <ProfileSettingsSelect
          options={["Woman", "Man"]}
          selectedOptions={["Man"]}
        />
        {basicInputValues.map((basicField) => {
          const onChangeValue = onBasicInputChange(basicField.field);
          return (
            <ProfileSettingsInput
              key={basicField.field}
              label={basicField.label}
              placeholder={basicField.placeholder}
              onChangeValue={onChangeValue}
              value={basicField.value}
            />
          );
        })}
        {interestsInputValues.map((interestsField) => (
          <ProfileSettingsInput
            key={interestsField.field}
            label={interestsField.label}
            placeholder={interestsField.placeholder}
          />
        ))}
        <Button
          label="Submit"
          buttonColor="blue"
          onPress={onSubmit}
          buttonColor="#3186C4"
          labelColor="white"
        />
      </ScrollView>
    </View>
  );
};

export default ProfileSettingsScreen;
