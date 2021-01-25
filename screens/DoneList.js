import React from "react";
import { ScrollView, View, SafeAreaView } from "react-native";
import Styled from "styled-components/native";

import Header from "../components/Header";
import Card from "../components/Card";

const Container = Styled.SafeAreaView`
    flex: 4;
    background-color: #FFFEF8;
`;

const CardContainer = Styled.ScrollView`
`;

export default function DoneList({ navigation }) {
  return (
    <Container>
      <Header pageName={"doneList"} navigation={navigation} />
      <CardContainer>
        <Card pageName={"doneList"} />
        <Card pageName={"doneList"} />
        <Card pageName={"doneList"} />
        <Card pageName={"doneList"} />
        <Card pageName={"doneList"} />
        <Card pageName={"doneList"} />
        <Card pageName={"doneList"} />
        <Card pageName={"doneList"} />
        <Card pageName={"doneList"} />
        <Card pageName={"doneList"} />
        <Card pageName={"doneList"} />
        <Card pageName={"doneList"} />
        <Card pageName={"doneList"} />
        <Card pageName={"doneList"} />
        <Card pageName={"doneList"} />
      </CardContainer>
    </Container>
  );
}
