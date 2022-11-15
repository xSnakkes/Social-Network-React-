import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={s.main__profile}>
      <div className={s.main__ava}>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/4/4e/Steamboat-willie.jpg"
          alt=""
        ></img>
      </div>
      <div className={s.main__name}>
        <div className={s.main__name_username}>Mickie Mouse</div>
        <div className={s.main__name_nickname}>@mickelo</div>
        <div className={s.main__description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eligendi
          repudiandae dolorum impedit natus modi quidem ad ducimus expedita
          cumque, maiores ea accusamus suscipit perspiciatis saepe praesentium?
          Non, nesciunt harum?
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
