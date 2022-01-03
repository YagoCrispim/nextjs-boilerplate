import * as S from './styles'

type Props = {
  imageLink: string
  alt: string
  doc: string
}

const IconBox = ({ imageLink, alt, doc }: Props) => {
  return (
    <S.Wrapper>
      <S.Content>
        <a target='_blank' data-testid='link' href={doc} rel='noreferrer'>
          <S.Image data-testid='icon' src={imageLink} alt={alt} />
        </a>
      </S.Content>
    </S.Wrapper>
  )
}

export { IconBox }
