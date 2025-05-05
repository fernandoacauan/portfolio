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
      <a href="#" onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/index.html';
                }}>
                HOME
      </a>
      </li>
      <li>
      <a href="#" onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/projetos.html';
                }}>
                PROJECTS
      </a>
          </li>
      <li>
        <a href="#">ABOUT ME
          </a>
        </li>
      <li><a href="#">CONTACT</a></li>
    </ul>
  </nav>
  );
}
