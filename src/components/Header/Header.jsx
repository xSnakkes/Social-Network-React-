import s from "./Header.module.css";
import image from "./logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={s.main}>
      <NavLink to="/">
        <div className={s.header}>
          <img className={s.header__logo} src={image} alt="logo" />
        </div>
      </NavLink>
    </div>
  );
};

export default Header;
