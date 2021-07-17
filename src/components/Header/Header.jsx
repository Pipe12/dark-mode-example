import StyledHeader from './StyledHeader';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import ModeCTA from '../ModeCTA/ModeCTA';

const Header = ({ toggleTheme, theme }) => {
  return (
    <StyledHeader>
      <HeaderTitle />
      <ModeCTA toggleTheme={toggleTheme} theme={theme}/>
    </StyledHeader>
  )
}

export default Header;
  