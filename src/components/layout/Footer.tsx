
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-upa-700 to-upa-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">UPA - União Presbiteriana de Adolescentes</h3>
            <p className="text-sm text-gray-200">
              Formando jovens cristãos comprometidos com a fé e com o serviço ao próximo.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:underline">Início</Link>
              </li>
              <li>
                <Link to="/eventos" className="hover:underline">Eventos</Link>
              </li>
              <li>
                <Link to="/devocional" className="hover:underline">Devocional</Link>
              </li>
              <li>
                <Link to="/sinodal" className="hover:underline">Sinodal</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: contato@upaadolescentes.com</li>
              <li>Instagram: @upaadolescentes</li>
              <li>WhatsApp: (00) 12345-6789</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm">
          <p>&copy; {currentYear} UPA - União Presbiteriana de Adolescentes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
