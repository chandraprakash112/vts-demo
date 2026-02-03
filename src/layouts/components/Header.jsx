import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header({openMenu, setOpenMenu}) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="w-full bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Dashboard
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-700">
          {/* {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="hover:text-blue-600 transition"
            >
              {item.label}
            </Link>
          ))} */}
        </nav>

        {/* <button
          className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={() => {
            navigate('/login');
          }}
        >
          Login
        </button> */}

        {/* Mobile Menu Button */}
        <button type="button" className="md:hidden" onClick={setOpenMenu}>
          {openMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}
