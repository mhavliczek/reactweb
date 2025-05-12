import React from 'react';
import { useAuth } from '../context/AuthContext';
import { LogOut } from 'lucide-react';

const Header: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-white text-center px-4 py-8 border-b-2 border-[#e67e22]">
      <img 
        src="https://www.udla.cl/wp-content/themes/udla/img/logo-udla.svg" 
        alt="Logo UDLA" 
        className="max-h-[70px] mx-auto mb-4" 
      />
      <h1 className="text-[#1a1a1a] text-4xl font-bold animate-fadeIn">Proyectos de Título</h1>
      <h5 className="text-[#1a1a1a] text-xl font-bold mt-2">Escuela de Ingeniería</h5>
      <p className="text-gray-600">Facultad de Economía y Negocios</p>
      <p className="text-gray-600">Ingeniería Civil Industrial – Año 2025</p>
      
      {isAuthenticated && (
        <button 
          onClick={logout}
          className="absolute top-4 right-4 flex items-center text-sm text-gray-600 hover:text-[#e67e22] transition-colors"
        >
          <LogOut size={16} className="mr-1" /> Cerrar sesión
        </button>
      )}
    </header>
  );
};

export default Header;