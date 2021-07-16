import styled from 'styled-components';
import { BsMoon } from 'react-icons/bs';

export const StyledModeCTA = styled.button`
  background-color: transparent;
  border: none;
  color: var(--dark-mode-text);
  font-size: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0;
`
export const StyledMoonIcon = styled(BsMoon)`
  margin-right: 8px;
`