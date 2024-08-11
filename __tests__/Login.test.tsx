import { render, screen } from "@testing-library/react-native";
import Login from "../src/screens/Login";
import "@testing-library/react-native/extend-expect";
test("Test login render text element", () => {
  render(<Login />);
  expect(screen.getByText("Login")).toBeOnTheScreen();
});
