import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import DocumentsSection from '../components/DocumentsSection';
import { Project } from '../types';

const DashboardPage: React.FC = () => {
  console.log('DashboardPage se está renderizando');

  // Sample project data
  const project: Project = {
    id: '1',
    group: 'Grupo 9',
    title: 'Propuesta de Plan Mantenimiento Predictivo Tribologico a flota camiones CAEX',
    links: [
      {
        url: 'https://proyectov1-c-gaj4.onrender.com',
        description: 'Cuadro Metricas Importantes'
      },
      {
        url: 'https://proyectov1-0.onrender.com',
        description: 'Dashboard Principal'
      },
      {
        url: 'https://proyectov1-c-fqt2.onrender.com',
        description: 'Dashboard Técnico'
      },
      {
        url: 'https://proyectov1-c.onrender.com',
        description: 'Dashboard Ejecutivo'
      },
      {
        url: 'https://proyectov1-economico.onrender.com',
        description: 'Dashboard Económico'
      }
    ],
    company: 'RT Codelco',
    description: 'Propuesta de Plan de Mantenimiento Predictivo para Camiones CAEX Flota Caterpillar - Komatsu - División Radomiro Tomic',
    members: [
      { name: 'Mauricio Havliczek Montoya', rut: '16.664.930-7' },
      { name: 'Rodrigo Macheo Lagos', rut: '15.197.390-6' },
      { name: 'Natalia Rojas Cortés', rut: '17.019.161-7' },
      { name: 'Sandra Barrera Contreras', rut: '17.654.223-3' }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12 animate-fadeIn">
        <ProjectCard project={project} />
        <DocumentsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default DashboardPage;