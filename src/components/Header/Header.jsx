import StyledHeader from './StyledHeader';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import ModeCTA from '../ModeCTA/ModeCTA';

const Header = ({ toggleTheme }) => {
  return (
    <StyledHeader>
      <HeaderTitle />
      <ModeCTA toggleTheme={toggleTheme}/>
    </StyledHeader>
  )
}

export default Header;
  