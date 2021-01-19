// Import: Packages
import React from "react";
import styled from "styled-components/native";

// Import: Components
import { Gallery, Text } from "./src/components";

// Component: App
export default function App() {
  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <Gallery />
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
