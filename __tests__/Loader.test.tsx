import React from "react";
import { render } from "@testing-library/react-native";
import Loader from "../src/components/Loader";

describe("Loader Component", () => {
  it("should render the loader when loading is true", () => {
    const { getByTestId } = render(<Loader loading={true} />);
    const modal = getByTestId("loader-modal");
    expect(modal.props.visible).toBe(true);
  });

  it("should not render the loader when loading is false", () => {
    const { queryByTestId } = render(<Loader loading={false} />);
    const modal = queryByTestId("loader-modal");
    expect(modal).toBeNull();
  });
});
