import React from "react";
import { render, screen } from "@testing-library/react-native";
import CustomText from "../src/components/CustomText";
import "@testing-library/react-native/extend-expect";

// Mock styles for the component
const styles = {
  smallText: {},
};

test("CustomText renders children correctly and applies styles", () => {
  const customStyle = { color: "red" }; // Custom style for testing
  const textContent = "Test Text";

  render(<CustomText style={customStyle}>{textContent}</CustomText>);

  // Check if the text content is rendered correctly
  const textElement = screen.getByText(textContent);
  expect(textElement).toBeOnTheScreen();

  // Verify if the custom style is applied
  expect(textElement.props.style).toContainEqual(customStyle);
});
