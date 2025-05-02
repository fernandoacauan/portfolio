import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
    <div className="logo">favicon</div>
    <ul className="nav-links">
      <li><a href="#" className="active">HOME</a></li>
      <li><a href="#">ABOUT ME</a></li>
      <li><a href="#">PROJECTS</a></li>
      <li><a href="#">CONTACT</a></li>
    </ul>
  </nav>
  );
}
