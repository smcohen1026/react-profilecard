import profile from '/Users/Kenneth/OneDrive/Desktop/myprofilecard/src/images/profile.jpg';
const Header = ({option}) => {
      
  return (
    <header>
      <div className="Picture"></div>
        <img src={profile} alt='profilecard'/>
      <h2>Hello!</h2>
      <p id="bio">{option}</p>
    </header>
  );
};

export default Header;
    
    