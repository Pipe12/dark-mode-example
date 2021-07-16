import StyledContainer from './StyledContainer';

const Container = ({ children }) => {
  return (
    <StyledContainer>
      { children }
    </StyledContainer>
  )
}

export default Container;
