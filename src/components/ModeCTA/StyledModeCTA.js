import styled from 'styled-components';
import { BsMoon, BsSun } from 'react-icons/bs';

export const StyledModeCTA = styled.button`
  background-color: transparent;
  border: none;
  color: var(${({ theme }) => theme.text});
  font-size: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0;
`

export const StyledMoonIcon = styled(BsMoon)`
  margin-right: 8px;
`

export const StyledSunIcon = styled(BsSun)`
  margin-right: 8px;
`
