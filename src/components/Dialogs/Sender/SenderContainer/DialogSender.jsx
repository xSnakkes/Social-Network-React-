import { NavLink } from "react-router-dom";
import s from "./DialogSender.module.css";

const DialogSender = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? s.active__link : undefined)}
    >
      <div className={s.dialogs__sender_name}>{props.name}</div>
    </NavLink>
  );
};

export default DialogSender;
