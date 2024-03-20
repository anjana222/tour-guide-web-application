import { Link, useMatch, useResolvedPath } from "react-router-dom";
import '../../styles/Anjana/Navbar.css';


export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Seylax
      </Link>
      <ul className="nav-links">
        <CustomLink to="/pricing">Home</CustomLink>
        <CustomLink to="/about">Cultures</CustomLink>
        <CustomLink to="/link1">Hotels</CustomLink>
        <CustomLink to="/link2">Tour Packages</CustomLink>
        <CustomLink to="/link3">Tour Guiders</CustomLink>
        <CustomLink to="/link4">Attractions</CustomLink>
        <CustomLink to="/link4">Whether</CustomLink>
        <CustomLink to="/link4">Memory Map</CustomLink>
        <CustomLink to="/link4">Login</CustomLink>
        <CustomLink to="/link4">Register</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
