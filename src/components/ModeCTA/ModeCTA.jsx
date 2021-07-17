import { StyledModeCTA, StyledMoonIcon, StyledSunIcon } from "./StyledModeCTA";

const ModeCTA = ({ toggleTheme, theme }) => {
  return (
    <StyledModeCTA onClick={toggleTheme}>
      {
        theme === 'dark'
        ? <><StyledMoonIcon />Dark Mode</>
        : <><StyledSunIcon /> Light Mode</> 
      }
    </StyledModeCTA>
  )
}

export default ModeCTA;
