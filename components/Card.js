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

const CheckBoxContainer = Styled.View`
    flex: 1;
    align-items: center;
`;

const Text = Styled.Text`
    flex: 5;
    font-size: 18px;
    font-weight: 900;
`;

const TrashContainer = Styled.View`
    flex: 1;
    height: 100%;
    justify-content: center;
    align-items: center;
    border-left-width: 1px;
    border-color: #E1E1E1;
`;

export default function ToDoList({ pageName }) {
  return (
    <Container>
      <CheckBoxContainer>
        {pageName === "toDoList" && (
          <FontAwesome name="circle-o" size={28} color="#BDBDBD" />
        )}
        {pageName === "doneList" && (
          <FontAwesome name="check-circle" size={28} color="#C29AE5" />
        )}
      </CheckBoxContainer>
      <Text>this is card</Text>
      <TrashContainer>
        <FontAwesome5 name="trash" size={24} color="#BDBDBD" />
      </TrashContainer>
    </Container>
  );
}
