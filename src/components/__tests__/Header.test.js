const { render, screen, fireEvent } = require("@testing-library/react")
const { Provider } = require("react-redux")
import Header from "../Header";
import { appStore } from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


test("should load Header component with Login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    // if we have multiple button then we can specify extra aparameter to specifically find that button
    const loginButton = screen.getByRole('button', {name: "Login"});

    expect(loginButton).toBeInTheDocument();
})

test("should load Header component with cart items zero", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    // find the element by using regex
    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
})

test("should change Login to Logout button on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole('button', {name: "Login"});

        // fire event to check changing buttons on click
    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole('button', {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
})