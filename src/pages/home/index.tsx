import { IconBox } from 'Components/atoms/IconBox'

import * as S from './styles'

const Main = () => {
  const icons = [
    {
      path: 'assets/icons/tools/typescript.png',
      alt: 'typescript logo',
      doc: 'https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html'
    },
    {
      path: 'assets/icons/tools/reactjs.png',
      alt: 'reactjs logo',
      doc: 'https://reactjs.org/'
    },
    {
      path: 'assets/icons/tools/nextjs.png',
      alt: 'nextjs logo',
      doc: 'https://nextjs.org/docs/getting-started'
    },
    {
      path: 'assets/icons/tools/styled.png',
      alt: 'styled logo',
      doc: 'https://styled-components.com/docs'
    },
    {
      path: 'assets/icons/tools/storybook.png',
      alt: 'storybook logo',
      doc: 'https://storybook.js.org/docs/react/writing-docs/introduction'
    },
    {
      path: 'assets/icons/tools/jest.png',
      alt: 'jest logo',
      doc: 'https://jestjs.io/docs/getting-started'
    },
    {
      path: 'assets/icons/tools/crc.png',
      alt: 'jest logo',
      doc: 'https://www.npmjs.com/package/create-react-component-batch'
    }
  ]

  return (
    <S.Wrapper>
      <S.Title>NextJS - Boilerplate</S.Title>
      <S.Description>
        TypeScript, React, Next.js, Styled Components, Jest, CRC & PWA
      </S.Description>
      <S.IconsContainer>
        {icons.map((icon, index) => (
          <IconBox
            key={index}
            imageLink={icon.path}
            alt={icon.alt}
            doc={icon.doc}
          />
        ))}
      </S.IconsContainer>
    </S.Wrapper>
  )
}

export default Main
