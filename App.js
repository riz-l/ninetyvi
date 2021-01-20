// Import: Packages
import React from "react";
import styled from "styled-components/native";

// Import: Data
import imageData from "./data/imageData";

// Import: Screens, Components
// import { HomeScreen, Login } from "./src/screens/";
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

      {/* <HomeScreen /> */}
      {/* <LoginScreen /> */}
      <Gallery data={imageData} />
    </Container>
  );
}

// Element: Container
const Container = styled.View`
  background-color: #2a2a2e;
  flex: 1;
`;

// Element: StatusBar
const StatusBar = styled.StatusBar``;
