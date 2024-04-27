import styled from 'styled-components'

export const HomeContainer = styled.main`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background-color: ${(props) => props.theme.green_500};
  color: ${(props) => props.theme.gray_100};

  &:not(:disabled)hover {
    background-color: ${(props) => props.theme.green_700};
  }
`
export const StopCountdownButton = styled(BaseCountdownButton)`
  background-color: ${(props) => props.theme.red_500};
  color: ${(props) => props.theme.gray_100};

  &:not(:disabled)hover {
    background-color: ${(props) => props.theme.red_700};
  }
`
