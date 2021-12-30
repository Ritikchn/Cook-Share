import React, { useContext, useState } from "react";
import { View, ScrollView, Dimensions } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Title } from "react-native-paper";
import styled from "styled-components";
import { SafeArea } from "../../utility/safe-area.component";
import { PlusButton } from "../small-components.js/plus-button";
import { AddRecipieButtom } from "../buttons/add.recipie.button";
import { AddScreenImage } from "../small-components.js/addScreen.image.component";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { addRecipie } from "../../api/recipies.api";

const AddScreenContainer = styled(View)`
  flex: 1;
  padding: 25px 0px;
  justify-content: center;
  align-items: center;
  elevation: 5;
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: 30px;
  height: 70%;
`;
const OTitle = styled(Title)`
  font-size: ${(props) => props.theme.fontSizes.title};
`;
const InputField = styled(TextInput)`
  border: 1px;
  width: 80%;
  padding: ${(props) => props.theme.space[2]};
  border-radius: 8px;
  text-align: center;
`;
const Spacer = styled(View)`
  margin: ${(props) => props.theme.space[2]} 0;
`;
const AddButtonContainer = styled(View)`
  background-color: red;
  position: absolute;
  right: 20px;
  top: 20px;
  border-radius: 100px;
`;
const AddMoreContainer = styled(View)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const NewScrool = styled(ScrollView)`
  flex: 1;
`;

export const AddScreen = () => {
  const [recipieTitle, setRecipieTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newIngridents, setNewIngridents] = useState([]);
  const [newSteps, setNewSteps] = useState([]);
  const [currIngrident, setCurrIngrident] = useState("");
  const [currStep, setCurrStep] = useState("");

  const { user } = useContext(AuthenticationContext);

  const Handlesubmit = () => {
    setRecipieTitle("");
    setNewDescription("");
    AddRecipieStep();
    AddRecipieIngridents();

    const newRecipieObject = {
      name: recipieTitle,
      description: newDescription,
      photos:
        "https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg",
      author: {
        authorImage:
          "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
        authorName: user.email.match(/^([^@]*)@/)[1],
      },
      ingridents: [...newIngridents, currIngrident],
      steps: [...newSteps, currStep],
    };
    addRecipie(newRecipieObject);
    setNewIngridents([]);
    setNewSteps([]);
  };

  const AddRecipieStep = () => {
    setNewSteps((prev) => [...prev, currStep]);
    setCurrStep("");
  };
  const AddRecipieIngridents = () => {
    setNewIngridents((prev) => [...prev, currIngrident]);
    setCurrIngrident("");
  };

  return (
    <SafeArea>
      <NewScrool>
        <AddScreenImage />
        <AddScreenContainer>
          <OTitle>Recipie Title :</OTitle>
          <Spacer />
          <InputField
            placeholder="e.g Panner Butter Masala"
            value={recipieTitle}
            onChangeText={setRecipieTitle}
          />
          <Spacer />
          <OTitle>Description :</OTitle>
          <Spacer />
          <InputField
            placeholder="e.g A Dish of Panner"
            value={newDescription}
            onChangeText={setNewDescription}
          />
          <Spacer />
          <OTitle>Ingridents :</OTitle>
          <AddMoreContainer>
            <InputField
              placeholder=" Note : add one by one"
              value={currIngrident}
              onChangeText={setCurrIngrident}
            />
            <AddButtonContainer>
              <TouchableOpacity onPress={AddRecipieIngridents}>
                <PlusButton />
              </TouchableOpacity>
            </AddButtonContainer>
          </AddMoreContainer>
          <Spacer />
          <OTitle>Steps :</OTitle>
          <AddMoreContainer>
            <InputField
              multiline
              placeholder=" Note : add one by one"
              value={currStep}
              onChangeText={setCurrStep}
            />
            <AddButtonContainer>
              <TouchableOpacity onPress={AddRecipieStep}>
                <PlusButton />
              </TouchableOpacity>
            </AddButtonContainer>
          </AddMoreContainer>
          <Spacer />
          <Spacer />
          <Spacer />
          <TouchableOpacity onPress={Handlesubmit}>
            <AddRecipieButtom />
          </TouchableOpacity>
        </AddScreenContainer>
      </NewScrool>
    </SafeArea>
  );
};
