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
import ProfileSettingsSlider from "components/ProfileSettingsSlider";
import ProfileSettingsRange from "components/ProfileSettingsSlider/ProfileSettingsRange";

const genderInputSelectOptions = {
  woman: {
    label: "Woman",
    value: "k",
  },
  man: {
    label: "Man",
    value: "m",
  },
};

const genderPreferenceSelectOptions = {
  women: {
    label: "Women",
    value: "k",
  },
  men: {
    label: "Men",
    value: "m",
  },
  both: {
    label: "Both",
    value: "b",
  },
};

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

  const [genderInputValue, setGenderInputValue] = useState(
    genderInputSelectOptions.man
  );
  const [genderPreferenceInputValue, setGenderPreferenceInputValue] = useState(
    genderPreferenceSelectOptions.women
  );

  const [distanceInputValue, setDistanceInputValue] = useState(30);
  const [ageInputValue, setAgeInputValue] = useState({
    min: 18,
    max: 25,
  });

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

    if (profile.gender) {
      setGenderInputValue({
        value: profile.gender,
        label: profile.gender === "k" ? "Woman" : "Man",
      });
    }
  }, [profile]);

  useEffect(() => {
    refetchProfile();
  }, [finishedUpdateFetching]);

  const onSubmit = () => {
    const profileInput = mapInputValuesToObject(basicInputValues);

    console.log({
      ...profileInput,
      gender: genderInputValue,
      interests: mapInputValuesToObject(interestsInputValues),
      preferences: {
        interestedIn: genderPreferenceInputValue.value,
        ageMin: ageInputValue.min,
        ageMax: ageInputValue.max,
        distance: distanceInputValue,
      },
    });

    onUpdate({
      ...profileInput,
      gender: genderInputValue,
      interests: mapInputValuesToObject(interestsInputValues),
      preferences: {
        interestedIn: genderPreferenceInputValue.value,
        ageMin: ageInputValue.min,
        ageMax: ageInputValue.max,
        distance: distanceInputValue,
      },
    });
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

  const onInterestInputChange = (fieldName) => (value) => {
    setInterestsInputValues(
      interestsInputValues.map((input) => {
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
          options={[
            genderInputSelectOptions.man,
            genderInputSelectOptions.woman,
          ]}
          selectedOptions={genderInputValue}
          onSelect={(option) => {
            setGenderInputValue(option);
          }}
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
        {interestsInputValues.map((interestsField) => {
          const onChangeValue = onInterestInputChange(interestsField.field);
          return (
            <ProfileSettingsInput
              key={interestsField.field}
              label={interestsField.label}
              placeholder={interestsField.placeholder}
              onChangeValue={onChangeValue}
              value={interestsField.value}
            />
          );
        })}

        <ProfileSettingsSelect
          options={[
            genderPreferenceSelectOptions.women,
            genderPreferenceSelectOptions.men,
            genderPreferenceSelectOptions.both,
          ]}
          selectedOptions={genderPreferenceInputValue}
          onSelect={(option) => {
            setGenderPreferenceInputValue(option);
          }}
        />

        <ProfileSettingsSlider
          inputValue={distanceInputValue}
          onValueChange={setDistanceInputValue}
          defaultValue={30}
          label="Distance"
        />

        <ProfileSettingsRange
          inputValue={ageInputValue}
          onValueChange={setAgeInputValue}
          label="Preferred age"
        />

        <View style={{ paddingLeft: "12.5%", marginBottom: 15 }}>
          <Button
            label="Submit"
            buttonColor="blue"
            onPress={onSubmit}
            buttonColor="#3186C4"
            labelColor="white"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileSettingsScreen;
