import HeaderTitle from '../HeaderTitle/HeaderTitle';
import ModeCTA from '../ModeCTA/ModeCTA';
import './Header.css';

const Header = ({ children }) => {
  return (
    <header className="Header">
      <HeaderTitle />
      <ModeCTA />
    </header>
  )
}

export default Header;
  