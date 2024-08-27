import { act, fireEvent, render, screen } from "@testing-library/react"
import { mock_restaurants } from "../../Constants"
import Body from "../Body"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(mock_restaurants)
        }
    })
})

it("Should render body component with Search", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>)
    )

    // Query

    const searchButton = screen.getByTestId("searchButton")

    expect(searchButton).toBeInTheDocument();
})

it("Should write inside my search box with restaurant name", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>)
    )

    // Query

    const searchButton = screen.getByTestId("searchButton")
    expect(searchButton).toBeInTheDocument();

    const searchInput = screen.getByTestId("searchInput")
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: "Sandwich" } })
    fireEvent.click(searchButton);

    // screen should load 2 cards
    const resCards = screen.getAllByTestId("resCard")
    expect(resCards.length).toBe(2)
})