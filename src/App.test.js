import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { customRender } from "./utils/testUtils";

jest.mock("./hooks/useFetch");
jest.mock("./hooks/useViewport");

describe("Testing the happy paths", () => {
  test("Page renders as expected and data is displayed", () => {
    customRender(<App />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Pokemon"
    );

    expect(screen.getAllByRole("button")).toHaveLength(3);

    expect(screen.getAllByRole("row")).toHaveLength(4);
  });

  test("Table is sorted by number (ascending) by default and and can be sorted by name", async () => {
    customRender(<App />);
    let firstRowUnsorted = screen.getAllByRole("row")[1];
    let container = within(firstRowUnsorted);
    expect(container.getByTestId("number").innerHTML).toBe("1");

    userEvent.click(screen.getByRole("button", { name: "Number" }));
    userEvent.click(await screen.findByTestId("name-select"));

    const firstRowSorted = await screen.findAllByRole("row");
    container = within(firstRowSorted[1]);
    expect(container.getByTestId("number").innerHTML).toBe("63");
  });

  test("Table can be sorted in descending order", async () => {
    customRender(<App />);
    userEvent.click(screen.getByRole("button", { name: "descending" }));
    const firstRowSorted = await screen.findAllByRole("row");
    const container = within(firstRowSorted[1]);
    expect(container.getByTestId("number").innerHTML).toBe("63");
  });
});
