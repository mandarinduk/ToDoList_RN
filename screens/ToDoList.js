import React, { useState } from "react";
import { View } from "react-native";
import Styled from "styled-components/native";

import { useSelector, useDispatch } from "react-redux";
import { addToDo, moveDone, removeToDo } from "../store/action/action";

import Header from "../components/Header";
import Card from "../components/Card";

import { FontAwesome } from "@expo/vector-icons";

const KeyboardAvoiding = Styled.KeyboardAvoidingView`
    flex: 1;
`;

const Container = Styled.SafeAreaView`
    flex: 4;
    background-color: #FFFEF8;
`;

const CardContainer = Styled.ScrollView`
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

const PlusBox = Styled.TouchableOpacity`
`;

export default function ToDoList({ navigation }) {
  const [value, onChangeText] = useState();
  const [id, setId] = useState(1);
  const todoList = useSelector((store) => store.toDos);
  const dispatch = useDispatch();

  console.log("todoList render");
  return (
    <KeyboardAvoiding behavior={Platform.OS == "ios" ? "padding" : "height"}>
      <Container>
        <Header pageName={"toDoList"} navigation={navigation} />
        <CardContainer>
          {todoList.map((todo) => {
            return (
              <Card
                key={todo.id}
                pageName={"toDoList"}
                todoValue={todo.desc}
                moveToDone={() => dispatch(moveDone(todo.id))}
                removeToDo={() => dispatch(removeToDo(todo.id))}
              />
            );
          })}
        </CardContainer>
        <InputBox>
          <Input
            onChangeText={(text) => onChangeText(text)}
            value={value}
            placeholder="해야 할 일"
          />
          <PlusBox
            onPress={() => {
              dispatch(addToDo(id, value));
              setId(id + 1);
              onChangeText("");
            }}
          >
            <FontAwesome name="plus" size={24} color="black" />
          </PlusBox>
        </InputBox>
      </Container>
      <View style={{ flex: 1 }} />
    </KeyboardAvoiding>
  );
}
