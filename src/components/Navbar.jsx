import style from "../style/Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className = {style.navbar}>
      <div className = {style.leftSec}> Left Section </div>
      <div className = {style.rightSec}> Right Section </div>
    </nav>
  )
}