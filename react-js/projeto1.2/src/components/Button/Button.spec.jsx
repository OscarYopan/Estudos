//import userEvent from '@testing-library/user-event'
import { Button } from '.'
const { render, screen, fireEvent } = require("@testing-library/react")

describe('<Button />',  () => {
  it('shoud render the button with the text "load more"', () => {
    render(<Button text='load more' />)
    expect.assertions(1)//para ter certeza que a assertion occoreu

    const button = screen.getByRole('button', { name: /load more/i })
    expect(button).toBeInTheDocument() //OBS: é interessante durante a configuração, criar um erro proposital para certificar-se que o teste está mesmo funcionando.
  })

  it('shoud call function on button click', () => {
    const fn = jest.fn()
    render(<Button text='load more' onClick={fn} />)

    
    const button = screen.getByRole('button', { name: /load more/i })

    fireEvent.click(button);

    //userEvent.click(button) //opcional com o mesmo resultado

    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('shoud be disabled when disabled is true', () => {
    render(<Button text='load more' disabled={true} />)    
    const button = screen.getByRole('button', { name: /load more/i })
    expect(button).toBeDisabled()
  })

  it('shoud be disabled when disabled is false', () => {
    render(<Button text='load more' disabled={false} />)    
    const button = screen.getByRole('button', { name: /load more/i })
    expect(button).toBeEnabled()
  })

  it('shoud match snapshot', () => {
    const { container } = render(<Button text='load more' disabled={false} />)
    
    expect(container.firstChild).toMatchSnapshot()
  })
})