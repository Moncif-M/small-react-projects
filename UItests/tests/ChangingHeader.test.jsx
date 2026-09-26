import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ChangingHeader from "../src/ChangingHeader.jsx"
import { expect } from "vitest"


describe('ChangingHeader component', () => {
    it('renders Change me!',  () => {
        const { container } = render(<ChangingHeader/>) 
        expect(container).toMatchSnapshot()
    })

    it('renders Changed! after clicking', async() => {
        const user = userEvent.setup()

        render(<ChangingHeader/>)

        const button = screen.getByRole("button", {name:"Click me!"})

        await user.click(button)

        expect(screen.getByRole("heading").textContent).toMatch(/changed!/i)

    })
})
