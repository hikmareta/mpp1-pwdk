import style from "/src/style/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.leftSec}>
        <h1>
          <b> PASSIFY </b>
        </h1>
      </div>
      <div className={style.middleSec}>
        <input type="text" placeholder="Search Event" className = {style.searchBar}/>
      </div>
      <div className={style.rightSec}>
        <p> Create Event </p>
        <p> Explore </p>
        <div>
          <button className={style.loginBtn}> Login </button>
          <button className={style.registerBtn}> Sign Up </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar
