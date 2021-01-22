import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  SafeAreaView,
} from "react-native";
import Styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

import Header from "../components/Header";
import Card from "../components/Card";

const KeyboardAvoiding = Styled.KeyboardAvoidingView`
    flex: 1;
`;

const Container = Styled.SafeAreaView`
    flex: 4;
    background-color: #FFFEF8;
`;

const CardContainer = Styled.ScrollView`
`;

const InputContainer = Styled.View`
`;

const InputBox = Styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-horizontal: 30px;
    height: 60px;
    background-color: #ffffff;
    box-shadow: 0px -1px 24px rgba(0, 0, 0, 0.12);
`;

const Input = Styled.TextInput`
    font-size: 18px;
    font-weight: 400;
`;

export default function ToDoList({ navigation }) {
  const [value, onChangeText] = useState();

  return (
    <KeyboardAvoiding behavior={Platform.OS == "ios" ? "padding" : "height"}>
      <Container>
        <Header pageName={"toDoList"} navigation={navigation} />
        <CardContainer>
          <Card pageName={"toDoList"} />
          <Card pageName={"toDoList"} />
          <Card pageName={"toDoList"} />
          <Card pageName={"toDoList"} />
          <Card pageName={"toDoList"} />
          <Card pageName={"toDoList"} />
          <Card pageName={"toDoList"} />
          <Card pageName={"toDoList"} />
          <Card pageName={"toDoList"} />
          <Card pageName={"toDoList"} />
          <Card pageName={"toDoList"} />
          <Card pageName={"toDoList"} />
          <Card pageName={"toDoList"} />
          <Card pageName={"toDoList"} />
          <Card pageName={"toDoList"} />
        </CardContainer>
        <InputContainer>
          <InputBox>
            <Input
              onChangeText={(text) => onChangeText(text)}
              value={value}
              placeholder="해야 할 일"
            />
            <FontAwesome name="plus" size={24} color="black" />
          </InputBox>
        </InputContainer>
      </Container>
      <View style={{ flex: 1 }} />
    </KeyboardAvoiding>
  );
}
