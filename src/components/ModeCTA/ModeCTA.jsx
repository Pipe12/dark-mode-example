import { StyledModeCTA, StyledMoonIcon } from "./StyledModeCTA";

const ModeCTA = ({ toggleTheme }) => {
  return (
    <StyledModeCTA onClick={toggleTheme}>
      <StyledMoonIcon />
      Dark Mode
    </StyledModeCTA>
  )
}

export default ModeCTA;
