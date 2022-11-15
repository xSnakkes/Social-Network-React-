import s from "./Message.module.css";
import MessageContainer from "./MessageContainer/MessageContainer";

const Message = (props) => {
  let messages = props.messages.map((el) => (
    <MessageContainer message={el.message} id={el.id} />
  ));
  return <div className={s.dialogs__message_block}>{messages}</div>;
};

export default Message;
