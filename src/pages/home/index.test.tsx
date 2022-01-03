import { render, screen } from '@testing-library/react'

import Main from '.'

describe('Main', () => {
  it('should render the heading', () => {
    render(<Main />)
    expect(
      screen.getByRole('heading', { name: /NextJS - Boilerplate/i })
    ).toBeInTheDocument()

    // SNAPSHOT
    // const { container } = render(<Main />)
    // expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#202324'
    })
  })
})
