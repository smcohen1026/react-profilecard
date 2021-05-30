import thumbsup from '/Users/Kenneth/OneDrive/Desktop/myprofilecard/src/images/thumbsup.jpg';
const Main = ({nameButton, skillButton,addClick,num}) => {
  return (
    <main>
      <div className="myButton">
        <button onClick={() => {
            nameButton('Shawn')
        }}>Name </button>
        <button onClick={() => {
            skillButton('Frontend Developer')
        }}>Skill </button>
      </div>
      <div className="likes">
        <p id="likeCounter">
          <span>{num}</span><img src={thumbsup} alt='thumb' onClick = {() => {
            addClick();
          }}></img>
        </p>
      </div>
    </main>
  );
};

export default Main;