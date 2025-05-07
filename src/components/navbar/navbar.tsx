import './navbar.css'

import Logo from '../../assets/logo2.png';

export default function Navbar() {

  const currentPath = window.location.pathname;

  return (
    <nav className="navbar">
    <div className="logo">
      <img className="logo-bg" src={Logo}></img>
    </div>
    <ul className="nav-links">
    <li>
      <a href="/" className={currentPath === '/' ? 'active' : ''}></a>
      </li>
      <li>
      <a href="/index" className={currentPath === '/index' ? 'active' : ''}>HOME</a>
      </li>
      <li>
        <a href="/projects" className={currentPath === '/projects' ? 'active' : ''}>PROJECTS</a>
      </li>
      <li>
        <a href="/aboutme" className={currentPath === '/aboutme' ? 'active' : ''}>ABOUT ME</a>
      </li>
      <li>
        <a href="/contact" className={currentPath === '/contact' ? 'active' : ''}>CONTACT</a>
      </li>
    </ul>
  </nav>
  );
}
