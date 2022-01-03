import { render, screen } from '@testing-library/react'
import { IconBox } from '.'

describe('IconBox', () => {
  test('should render the props texts', () => {
    const props = {
      alt: 'alt_text',
      doc: 'documentation_link',
      path: 'image_path'
    }

    render(<IconBox imageLink={props.path} alt={props.alt} doc={props.doc} />)

    const icon = screen.getByTestId('icon')
    const link = screen.getByTestId('link')

    expect(icon.getAttribute('alt')).toBe(props.alt)
    expect(icon.getAttribute('src')).toBe(props.path)
    expect(link.getAttribute('href')).toBe(props.doc)
  })
})
