import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductPage from "./ProductPage";

beforeEach(async () => {
  render(<ProductPage />);
  await waitForElementToBeRemoved(() => screen.getByTitle(/loading/i));
});

describe("ProductPage", () => {
  test("WHEN a user goes to the Products page, THEN the pagination control will be displayed", () => {
    const previousPageButton = screen.getAllByRole("button", {
      name: "Previous page",
    });
    const nextPageButton = screen.getAllByRole("button", { name: "Next page" });
    previousPageButton.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
    nextPageButton.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });

  test("WHEN a user navigates to the first page of the Products page, THEN the previous/back button of the pagination control will be disabled", () => {
    const previousPageButton = screen.getAllByRole("button", {
      name: "Previous page",
    });
    previousPageButton.forEach((button) => {
      expect(button).toBeDisabled();
    });
  });

  test("WHEN the user navigates to the second page of the Products page, THEN the previous/back button of the pagination control will be enabled", () => {
    const previousPageButton = screen.getAllByRole("button", {
      name: "Previous page",
    });
    const nextPageButton = screen.getAllByRole("button", {
      name: "Next page",
    });
    userEvent.click(nextPageButton[0]);
    previousPageButton.forEach((button) => {
      expect(button).toBeEnabled();
    });
  });

  test("WHEN the user navigates to the last page of the Products page, THEN next button of the pagination control will be disabled", () => {
    const nextPageButton = screen.getAllByRole("button", {
      name: "Next page",
    });
    userEvent.click(nextPageButton[0]);
    nextPageButton.forEach((button) => {
      expect(button).toBeDisabled();
    });
  });

  test("WHEN a user goes to the Products page, THEN the current page will be highlighted in the pagination control", () => {
    const pageDisplay = screen.queryAllByText(/page/i);
    pageDisplay.forEach((text) => {
      expect(text.textContent).toBe("Page 1 of 2");
    });
    const nextPageButton = screen.getAllByRole("button", { name: "Next page" });
    userEvent.click(nextPageButton[0]);
    pageDisplay.forEach((text) => {
      expect(text.textContent).toBe("Page 2 of 2");
    });
  });
});
