import React from "react";
import Styled from "styled-components/native";

import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const Container = Styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-horizontal: 10px;
    margin-vertical: 10px;
    width: 95%;
    height: 60px;
    background-color: #FFFFFF;
    border: 1px #E1E1E1;
    border-radius: 6px;
`;

const CheckBoxContainer = Styled.TouchableOpacity`
    flex: 1;
    align-items: center;
`;

const Text = Styled.Text`
    flex: 5;
    font-size: 18px;
    font-weight: 900;
    color: ${({ pageName }) => (pageName === "doneList" ? "gray" : "null")};
    text-decoration-line: ${({ pageName }) =>
      pageName === "doneList" ? "line-through" : "none"};
`;

const TrashContainer = Styled.TouchableOpacity`
    flex: 1;
    height: 100%;
    justify-content: center;
    align-items: center;
    border-left-width: 1px;
    border-color: #E1E1E1;
`;

export default function ToDoList({
  pageName,
  todoValue,
  moveToDone,
  moveToToDo,
  removeToDo,
  removeDone,
}) {
  return (
    <Container>
      <CheckBoxContainer
        onPress={pageName === "toDoList" ? moveToDone : moveToToDo}
      >
        {pageName === "toDoList" && (
          <FontAwesome name="circle-o" size={28} color="#BDBDBD" />
        )}
        {pageName === "doneList" && (
          <FontAwesome name="check-circle" size={28} color="#C29AE5" />
        )}
      </CheckBoxContainer>
      <Text pageName={pageName}>{todoValue}</Text>
      <TrashContainer
        onPress={pageName === "toDoList" ? removeToDo : removeDone}
      >
        <FontAwesome5 name="trash" size={24} color="#BDBDBD" />
      </TrashContainer>
    </Container>
  );
}
