import { Posts } from '.'
const { render,screen } = require("@testing-library/react")

const props = {
  posts: [
    {
      id: 1,
      title: 'Title One',
      body: 'Full Body Two',
      cover: 'img/img.png'
    },
    {
      id: 2,
      title: 'Title Two',
      body: 'Full Body Two',
      cover: 'img/img2.png'
    },
    {
      id: 3,
      title: 'Title Three',
      body: 'Full Body Three',
      cover: 'img/img3.png'
    },
  ]
};

describe('<Posts />', () => {
  it('should render Posts', () => {
    render(<Posts {...props} />)

    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3)

    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3)

    expect(screen.getAllByText(/body/i)).toHaveLength(3)

    expect(screen.getByRole('img', { name: /Title Three/i })).toHaveAttribute('src', 'img/img3.png')
  })
})