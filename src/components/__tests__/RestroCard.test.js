import { render, screen } from "@testing-library/react";
import RestroCard, {openedRestroCard} from "../RestroCard";
import RES_CARD_MOCK_DATA from "../../components/mocks/resCardMock.json"
import "@testing-library/jest-dom"

const RestroCardOpened = openedRestroCard(RestroCard);


test("should render restaurant card component with props data", () => {

    render(<RestroCard resData={RES_CARD_MOCK_DATA} />);
    const resName = screen.getByText("Chinese Wok");

    expect(resName).toBeInTheDocument();
})

test("should render restaurant card component with label Opened", () => {

    render(<RestroCardOpened resData={RES_CARD_MOCK_DATA} />);
    const labelName = screen.getByText("Opened");

    expect(labelName).toBeInTheDocument();
})