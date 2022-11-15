import DialogSender from './SenderContainer/DialogSender'
import s from "./Sender.module.css";

const Sender = (props) => {
  let dialogs = props.dialogs.map((el) => (
    <DialogSender name={el.name} id={el.id} />
  ));
  return (
    <div className={s.dialogs__sender}>
          {dialogs}
      </div>
  );
};

export default Sender;
