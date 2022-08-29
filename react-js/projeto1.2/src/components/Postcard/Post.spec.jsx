import { PostCard } from '.'
import { postCardPropsMock } from './mock'
const { render,screen } = require("@testing-library/react")

const props = postCardPropsMock

describe('<PostCard />', () => {
  it('Shoul render PostCard correctly', () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole('img', { name: props.title})).toHaveAttribute('src', 'img/img.png')

    expect(screen.getByRole('heading', {name: props.title })).toBeInTheDocument()

    expect
  })
})