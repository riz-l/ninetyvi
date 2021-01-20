// Import: Packages
import React from "react";
import styled from "styled-components/native";

// Import: Data
import imageData from "./data/imageData";

// Import: Components
import { Gallery } from "./src/components";

// Component: App
export default function App() {
  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <Gallery data={imageData} />
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
