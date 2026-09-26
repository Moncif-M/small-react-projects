import { render, screen } from "@testing-library/react";
import App from "../src/App.jsx"

describe('App', () => {
    it('renders headline', () => {
        render(<App/>)
        
        expect(screen.getByRole("heading").textContent).toMatch(/hello, world!/i)
    })
})
