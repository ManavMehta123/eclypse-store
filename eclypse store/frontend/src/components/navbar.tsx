import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-900 text-white px-4 py-3 flex justify-between items-center">
    <h1 className="text-2xl font-bold">Eclypse</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/about" className="hover:underline">About</Link>
      <Link to="/login" className="hover:underline">Login</Link>
    </div>
  </nav>
);

export default Navbar;
