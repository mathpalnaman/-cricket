import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="font-bold text-md text-white p-4 bg-gray-800">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-8">
          <li className="relative group">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="relative group">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="relative group">
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li className="relative group">
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </li>
          <li className="relative group">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
