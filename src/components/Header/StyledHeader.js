import styled from 'styled-components';

const StyledHeader =styled.header`
  background-color: var(${({ theme }) => theme.backgroundBody});
  color: var(${({ theme }) => theme.text});
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  box-shadow: 0px 2px 10px 0px var(${({ theme }) => theme.shadow});
`
export default StyledHeader;
