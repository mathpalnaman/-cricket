import { Link } from 'react-router-dom';

export default function Navbar() {
  <navbar/>
  return (
    <nav className="font-bold text-md text-white p-4 bg-black relative z-20">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-8">
          <li className="relative group">
          <Link 
            to="/" 
            className="hover:underline decoration-2 underline-offset-4 transition duration-300"
          >
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
          {/* <li className="relative group">
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </li> */}
          <li className="relative group">
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>
          <li className="relative group">
            <Link to="/tournamentregistration" className="nav-link">
              Registration
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
