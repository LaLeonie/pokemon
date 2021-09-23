import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./hooks/useFetch");

describe("Testing the happy paths", () => {
  test("Page renders as expected and data is displayed", () => {
    render(<App />);

    screen.debug();
  });
});
