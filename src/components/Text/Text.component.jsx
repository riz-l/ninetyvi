// Import: Packages
import React from "react";

// Import: Elements
import { StyledText } from "./Text.elements";

// Component: Text
export default function Text({ ...props }) {
  return (
    <>
      <StyledText {...props}>{props.children}</StyledText>
    </>
  );
}
