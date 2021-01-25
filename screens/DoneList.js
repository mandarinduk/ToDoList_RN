import React from "react";
import Styled from "styled-components/native";

import { useSelector, useDispatch } from "react-redux";
import { moveTodo, removeDone } from "../store/action/action";

import Header from "../components/Header";
import Card from "../components/Card";

const Container = Styled.SafeAreaView`
    flex: 4;
    background-color: #FFFEF8;
`;

const CardContainer = Styled.ScrollView`
`;

export default function DoneList({ navigation }) {
  const doneList = useSelector((store) => store.dones);
  const dispatch = useDispatch();

  console.log("doneList render");

  return (
    <Container>
      <Header pageName={"doneList"} navigation={navigation} />
      <CardContainer>
        {doneList.map((done) => {
          return (
            <Card
              key={done.id}
              pageName={"doneList"}
              todoValue={done.desc}
              moveToToDo={() => dispatch(moveTodo(done.id))}
              removeDone={() => dispatch(removeDone(done.id))}
            />
          );
        })}
      </CardContainer>
    </Container>
  );
}
