import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';


const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main 
        className="flex-grow flex items-center justify-center px-4 py-12 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./src/images/minero1.jpeg")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <LoginForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default LoginPage;