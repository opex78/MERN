import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact us Page test cases", () => {
    it("Should render heading inside Contact page", () => {
        render(<Contact />);

        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })

    it("Should load input name inside contact component", () => {
        render(<Contact />)

        const inputName = screen.getByPlaceholderText("message");
        expect(inputName).toBeInTheDocument();

    })
})

describe("Contact us page textbox validation", () => {
    it("Should load 1 textbox inside contact component", () => {
        render(<Contact />)

        // Query
        const textBoxes = screen.getAllByRole("textbox");

        // Assert
        expect(textBoxes.length).toBe(1);
    })
})
