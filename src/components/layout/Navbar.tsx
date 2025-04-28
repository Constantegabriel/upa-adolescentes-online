
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Calendar, Book, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { title: 'Início', path: '/', icon: <Home className="h-5 w-5" /> },
    { title: 'Eventos', path: '/eventos', icon: <Calendar className="h-5 w-5" /> },
    { title: 'Devocional', path: '/devocional', icon: <Book className="h-5 w-5" /> },
    { title: 'Sinodal', path: '/sinodal', icon: <Users className="h-5 w-5" /> },
    { title: 'Federações', path: '/federacoes', icon: <Users className="h-5 w-5" /> },
    { title: 'UPAs Locais', path: '/upas-locais', icon: <Users className="h-5 w-5" /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-upa-600">UPA</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-upa-600 transition-colors duration-200"
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <div className="container mx-auto px-4 py-3">
            {menuItems.map((item, index) => (
              <Link
                key={item.title}
                to={item.path}
                className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:bg-upa-100 hover:text-upa-600 rounded-md transition-colors duration-200"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
