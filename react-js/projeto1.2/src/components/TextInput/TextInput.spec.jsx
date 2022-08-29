import { TextInput } from '.'

const { render, screen} = require("@testing-library/react")

describe('<Posts />', () => {
  it('should render Posts', () => {
    render(<TextInput />)
    
  })
})