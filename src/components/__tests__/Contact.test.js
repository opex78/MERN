import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Contact from "../Contact"

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

    it("Should load 1 textbox inside contact component", () => {
        render(<Contact />)

        const textBoxes = screen.getAllByRole("textbox");
        expect(textBoxes.length).toBe(1);

    })
})
