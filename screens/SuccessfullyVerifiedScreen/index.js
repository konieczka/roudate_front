import React, { useState } from "react";
import SuccessfullyVerified from "../../components/SuccessfullyVerified";

const SuccessfullyVerifiedScreen = ({ navigation }) => {
  
  return (
    <SuccessfullyVerified
      goToLogin={() => {
        navigation.navigate("LoginScreen");
      }}
    />
  );
};

export default SuccessfullyVerifiedScreen;
