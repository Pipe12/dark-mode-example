import styled from 'styled-components';

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;

  display: grid;
  justify-content: center;
  align-content: center;

  background-color: var(${({ theme }) => theme.backgroundBody});
`
export default StyledApp;
