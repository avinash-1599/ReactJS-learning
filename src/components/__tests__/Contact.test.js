import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


describe("Contact Us Page test cases", () => {

    test("should load contact component", () => {

        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    })
    
    test("should load button inside my contact component", () => {
        render(<Contact />);
        // using getByText
        const button1 = screen.getByText("Send Message");
        // using getByRole
        const button2 = screen.getByRole("button");
        expect(button1).toBeInTheDocument();
        expect(button2).toBeInTheDocument();
    })
    
    test("should load input text inside my contact component", () => {
        render(<Contact />);
    
        const inputText = screen.getByPlaceholderText("Your Name");
    
        expect(inputText).toBeInTheDocument();
    })
    
    test("should load 4 input boxes inside my contact component", () => {
        render(<Contact />);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        expect(inputBoxes.length).toBe(4);
    })
})