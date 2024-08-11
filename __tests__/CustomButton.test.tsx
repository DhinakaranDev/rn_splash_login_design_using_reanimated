import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import CustomButton from "../src/components/CustomButton"; // Adjust the path to your CustomButton component
import "@testing-library/react-native/extend-expect";

// Mock styles for the component
const styles = {
  loginButton: {},
  loginButtonText: {},
};

test("CustomButton renders with correct title and responds to press event", () => {
  const mockOnPress = jest.fn();
  const buttonTitle = "Click Me";

  render(<CustomButton title={buttonTitle} onPress={mockOnPress} />);

  // Check if the button title is rendered correctly
  expect(screen.getByText(buttonTitle)).toBeOnTheScreen();

  // Simulate a press event
  fireEvent.press(screen.getByText(buttonTitle));

  // Verify if the onPress function was called
  expect(mockOnPress).toHaveBeenCalledTimes(1);
});
