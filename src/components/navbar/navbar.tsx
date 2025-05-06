import './navbar.css'

import Logo from '../../assets/logo2.png';

export default function Navbar() {
  return (
    <nav className="navbar">
    <div className="logo">
      <img className="logo-bg" src={Logo}></img>
    </div>
    <ul className="nav-links">
      <li>
      <a href="/index">HOME</a>
      </li>
      <li>
        <a href="/projects">PROJECTS</a>
      </li>
      <li>
        <a href="/aboutme">ABOUT ME</a>
      </li>
      <li>
        <a href="/contact">CONTACT</a>
      </li>
    </ul>
  </nav>
  );
}
