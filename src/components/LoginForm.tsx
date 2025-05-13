import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, User } from 'lucide-react';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim() || !password.trim()) {
      setError('Por favor ingrese usuario y contraseña');
      return;
    }
    
    const success = login(username, password);
    
    if (success) {
      navigate('/dashboard');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 card-custom animate-slideUp backdrop-blur-sm bg-white/90">
      <h2 className="text-2xl font-bold text-center text-[#1a1a1a] mb-8">Acceso al Sistema</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="form-label" htmlFor="username">Usuario</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <User size={18} />
            </div>
            <input
              id="username"
              type="text"
              className="input-field pl-10"
              placeholder="Ingrese su usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="form-label" htmlFor="password">Contraseña</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <Lock size={18} />
            </div>
            <input
              id="password"
              type="password"
              className="input-field pl-10"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 text-[#e67e22] border-gray-300 rounded focus:ring-[#e67e22]"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
              Recordarme
            </label>
          </div>
          
          <a href="#" className="text-sm text-[#e67e22] hover:underline">
            ¿Olvidó su contraseña?
          </a>
        </div>
        
        <button type="submit" className="w-full btn-orange py-3 font-medium">
          Iniciar Sesión
        </button>
      </form>
      
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Use para pruebas:</p>
        
      </div>
    </div>
  );
};

export default LoginForm;