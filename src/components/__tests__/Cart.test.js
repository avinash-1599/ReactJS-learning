import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from '../RestaurantMenu';
import { act } from "@testing-library/react";
import RES_MENU_MOCK_DATA from "../../components/mocks/resMenuMock.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {appStore} from "../../utils/appStore"
import Header from "../Header";
import Cart from "../Cart"
import '@testing-library/jest-dom'


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(RES_MENU_MOCK_DATA)
    })
})

test("should load the restaurant menu component", async () => {

    await act( async () =>
        render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <Header />
                    <Cart />
                    <RestaurantMenu />
                </BrowserRouter>
            </Provider>
    ))

    const accordianHeader = screen.getByText('Recommended (20)');

    fireEvent.click(accordianHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(20);

    const addBtns = screen.getAllByRole('button', {name: 'Add to Cart'});

    expect(addBtns.length).toBe(20);

    expect(screen.getByText('Cart 0')).toBeInTheDocument();

    fireEvent.click(addBtns[0]);

    expect(screen.getByText('Cart 1')).toBeInTheDocument();

    fireEvent.click(addBtns[1]);

    expect(screen.getByText('Cart 2')).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(22);

    fireEvent.click(screen.getByRole('button', {name: 'Clear Cart'}));

    expect(screen.getAllByTestId("foodItems").length).toBe(20);

    expect(screen.getByText('Cart 0')).toBeInTheDocument();

    expect(screen.getByText("Your cart is empty"));

})