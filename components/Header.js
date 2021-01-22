import React from "react";
import Styled from "styled-components/native";

const NaviBox = Styled.View`
    flex-direction: row;
    background-color: #C29AE5;
`;

const NaviTextContainer = Styled.View`
    flex: 1;
    align-items: center;
`;

const ToDoBar = Styled.View`
    margin-top: 4px;
    width: 100%;
    height: 10px;
    background-color: ${({ selected }) => {
      return selected === "toDoList" ? "#FFFEF8" : "#C29AE5";
    }};
`;

const DoneBar = Styled(ToDoBar)`
    background-color: ${({ selected }) => {
      return selected === "doneList" ? "#FFFEF8" : "#C29AE5";
    }};
`;

const NaviText = Styled.Text`
    font-size: 15px;
    font-weight: 700;
    color: #FFFEF8;
`;

export default function Header({ pageName, navigation }) {
  return (
    <NaviBox>
      <NaviTextContainer>
        <NaviText onPress={() => navigation.navigate("ToDoList")}>
          Mission
        </NaviText>
        <ToDoBar selected={pageName} />
      </NaviTextContainer>
      <NaviTextContainer>
        <NaviText onPress={() => navigation.navigate("DoneList")}>
          Completed!
        </NaviText>
        <DoneBar selected={pageName} />
      </NaviTextContainer>
    </NaviBox>
  );
}
