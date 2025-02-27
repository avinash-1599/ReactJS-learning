
// integration test
// for searching something in Body Component

import { fireEvent, render, screen } from "@testing-library/react";
import {act} from "react-dom/test-utils";
import Body from "../Body";
import RES_LIST_MOCK_DATA from "../../components/mocks/resListMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RES_LIST_MOCK_DATA)
        }
    })
})


// testing components with async fetch call (api)
test("should search Restaurant List with search input pizza", async () => {

    await act( async () => {
        render (<BrowserRouter><Body /></BrowserRouter>)
    })

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(8);

    const searchBtn = screen.getByRole('button', {name: 'Search'});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target: {value: 'pizza'}})

    fireEvent.click(searchBtn)

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(1);
    
})

test("should filter top rated restaurants", async () => {

    await act( async () => {
        render (<BrowserRouter><Body /></BrowserRouter>)
    })

    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(8);

    const topRatedBtn = screen.getByRole('button', {name: 'Top Rated Restro'});

    fireEvent.click(topRatedBtn)

    const cardsAfterFilter = screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.length).toBe(2);
})