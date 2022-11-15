import s from "./Navbar.module.css";
import profile from "./profile.png";
import message from "./message.png";
import news from "./news.png";
import music from "./music.png";
import setting from "./setting.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <NavLink
        to="/profile"
        className={({ isActive }) => (isActive ? s.active__link : undefined)}
      >
        <div className={s.navbar__list}>
          <img
            className={s.navbar__logo}
            src={profile}
            alt="profile_logo"
          ></img>
          Profile
        </div>
      </NavLink>
      <NavLink
        to="/dialogs"
        className={({ isActive }) => (isActive ? s.active__link : undefined)}
      >
        <div className={s.navbar__list}>
          <img
            className={s.navbar__logo}
            src={message}
            alt="message_logo"
          ></img>
          Messages
        </div>
      </NavLink>
      <NavLink
        to="/news"
        className={({ isActive }) => (isActive ? s.active__link : undefined)}
      >
        <div className={s.navbar__list}>
          <img className={s.navbar__logo} src={news} alt="news_logo"></img>
          News
        </div>
      </NavLink>
      <NavLink
        to="/music"
        className={({ isActive }) => (isActive ? s.active__link : undefined)}
      >
        <div className={s.navbar__list}>
          <img className={s.navbar__logo} src={music} alt="music_logo"></img>
          Music
        </div>
      </NavLink>
      <NavLink
        to="/setting"
        className={({ isActive }) => (isActive ? s.active__link : undefined)}
      >
        <div className={s.navbar__list}>
          <img
            className={s.navbar__logo}
            src={setting}
            alt="setting_logo"
          ></img>
          Setting
        </div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
