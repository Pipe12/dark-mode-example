import StyledHeader from './StyledHeader';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import ModeCTA from '../ModeCTA/ModeCTA';

const Header = ({ children }) => {
  return (
    <StyledHeader>
      <HeaderTitle />
      <ModeCTA />
    </StyledHeader>
  )
}

export default Header;
  