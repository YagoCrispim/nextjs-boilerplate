import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #202324;
  color: #fff;

  width: 100%;
  height: 100vh;

  padding: 3rem;

  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const IconsContainer = styled.div`
  width: 40%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin-top: 10px;

  @media (max-width: 500px) {
    width: 100%;

    margin-top: 20px;
  }
`
