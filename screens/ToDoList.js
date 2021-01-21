import React, { useState } from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import Styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

import Header from "../components/Header";
import Card from "../components/Card";

const KeyboardAvoiding = Styled.KeyboardAvoidingView`
    flex: 1;
    border: 2px green;
`;

const Container = Styled.View`
    flex: 1;
    background-color: #FFFEF8;
`;

const CardContainer = Styled.ScrollView`
    flex: 1;
    border: 2px red;
`;

const InputContainer = Styled.KeyboardAvoidingView`
    /* flex: 1; */
    /* justify-content: flex-end; */
    border: 2px yellow;
`;

const InputBox = Styled.View`
    /* flex: 1; */
    border: 2px blue;
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

export default function ToDoList() {
  const [value, onChangeText] = useState();

  return (
    <KeyboardAvoiding behavior="padding" enabled>
      <Container>
        <Header pageName={"toDoList"} />
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
        {/* <InputContainer behavior="padding" enabled> */}
        <InputBox>
          <Input
            onChangeText={(text) => onChangeText(text)}
            value={value}
            placeholder="해야 할 일"
          />
          <FontAwesome name="plus" size={24} color="black" />
        </InputBox>
        {/* </InputContainer> */}
      </Container>
    </KeyboardAvoiding>
  );
}
