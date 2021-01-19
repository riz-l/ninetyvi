// Import: Packages
import React from "react";
import styled from "styled-components/native";

// Import: Components
import { Text } from "./src/components";

// Component: App
export default function App() {
  return (
    <Container>
      <Text color="red">Open up App.js to start working on your app!</Text>
      <StatusBar backgroundColor="red" barStyle="light-content" />
    </Container>
  );
}

// Element: Container
const Container = styled.View`
  align-items: center;
  background-color: #ffffff;
  flex: 1;
  justify-content: center;
`;

// Element: StatusBar
const StatusBar = styled.StatusBar``;
