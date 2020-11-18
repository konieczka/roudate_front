import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import ScreenHeader from "components/ScreenHeader";
import ProfileSettingsInput from "components/ProfileSettingsInput";
import ImageUploader from "components/ImageUploader";
import ProfileSettingsSelect from "components/ProfileSettingsSelect";

const ProfileSettingsScreen = () => {
  const { profile } = useSelector((state) => state.currentUser);
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

  console.log(basicInputValues, interestsInputValues);
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        paddingTop: 75,
      }}
    >
      <ScreenHeader label="Your Profile" />
      <ScrollView>
        <ImageUploader />
        <ProfileSettingsSelect
          options={["Woman", "Man"]}
          selectedOptions={["Man"]}
        />
        {basicInputValues.map((basicField) => (
          <ProfileSettingsInput
            key={basicField.field}
            label={basicField.label}
            placeholder={basicField.placeholder}
          />
        ))}
        {interestsInputValues.map((basicField) => (
          <ProfileSettingsInput
            key={basicField.field}
            label={basicField.label}
            placeholder={basicField.placeholder}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ProfileSettingsScreen;
