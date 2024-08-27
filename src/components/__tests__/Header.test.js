import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../../utils/appStore"
import Header from "../Header"
import "@testing-library/jest-dom"

it("Should load the header component with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    // Query 
    const loginButton = screen.getByRole("button", { name: "Login" })
    // console.log(loginButton)
    // Assert
    expect(loginButton).toBeInTheDocument();
})

it("Should click on login button and text should be logout", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button", { name: "Login" })
    console.log(loginButton)
    expect(loginButton).toBeInTheDocument();

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" })
    expect(logoutButton).toBeInTheDocument();
})