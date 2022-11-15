import s from "./Dialogs.module.css";
import Sender from "./Sender/Sender";
import Message from "./Message/Message";
import { changeMessageActionCreator, addMessageActionCreator } from "../../redux/state";
import React from 'react';

let textNewPost = React.createRef();





const Dialogs = (props) => {
  let OnPostChange = () => {
    let text = textNewPost.current.value;
    props.dispatch(changeMessageActionCreator(text))
    
  }

  let buttonNewPost = () => {
    props.dispatch(addMessageActionCreator());
    
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__name}>Dialogs</div>
      <div className={s.dialog__block}>
        <Sender dialogs={props.dialogs} />
        <div className={s.wrap}>
          <div className={s.messages_wrapper}>
            <textarea
              onChange={OnPostChange}
              placeholder="Your message..."
              value={props.newMessageText}
              className={s.text__area}
              ref={textNewPost}
            ></textarea>
            <button onClick={buttonNewPost} className={s.message_button}>Send</button>
          </div>
          <Message messages={props.messages} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
