import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme.gray_100};

  display: flex;
  gap: 0.5rem;

  span {
    padding: 2.5rem 1rem;
    background-color: ${(props) => props.theme.gray_700};
    border-radius: 8px;
  }
`
export const Separator = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.green_500};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
