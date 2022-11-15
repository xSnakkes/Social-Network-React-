import s from "./posts.module.css";

const Posts = (props) => {
  return (
    <div className={s.posts}>
      <div className={s.posts__photo}>
        <div className={s.posts__ava}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/4/4e/Steamboat-willie.jpg"
            alt=""
          ></img>
        </div>
      </div>
      <div className="grid">
        <div className={s.name__username}>
          <div className={s.name__name}>Mickie Mouse</div>
          <div className={s.name__nickname}>@mickelo</div>
        </div>
        <div className={s.post__text}>{props.text}</div>
      </div>
    </div>
  );
};

export default Posts;
