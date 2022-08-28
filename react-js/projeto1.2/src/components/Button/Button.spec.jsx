import { Button } from '.'
const { render, screen } = require("@testing-library/react")

describe('<Button />',  () => {
  it('shoud render the button with the text "load more"', () => {
    render(<Button text='load more' />)

    const button = screen.getByRole('button', { name: /loadmore/i})
  })
})