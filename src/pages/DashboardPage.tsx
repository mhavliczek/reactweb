import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import DocumentsSection from '../components/DocumentsSection';
import { Project, Document } from '../types';

const DashboardPage: React.FC = () => {
  // Sample project data
  const project: Project = {
    id: '1',
    group: 'Grupo 9',
    title: 'Análisis Tribológico Predictivo Muestra Aceite TEST',
    link: 'http://3.140.57.67:8501',
    company: 'RT Codelco',
    description: 'Propuesta de Plan de Mantenimiento Predictivo para Camiones CAEX Flota Caterpillar - Komatsu - División Radomiro Tomic',
    members: [
      { name: 'Mauricio Havliczek Montoya', rut: '16.664.930-7' },
      { name: 'Rodrigo Macheo Lagos', rut: '15.197.390-6' },
      { name: 'Natalia Rojas Cortés', rut: '17.019.161-7' },
      { name: 'Sandra Barrera Contreras', rut: '17.654.223-3' }
    ]
  };

  // Sample document data
  const documents: Document[] = [
    { filename: 'Cobre_Cu_ppm_criticidad_pie.png', path: '/src/data/Cobre_Cu_ppm_criticidad_pie.png', type: 'image' },
    { filename: 'criticidad_minerales_panel_1.png', path: '/src/data/criticidad_minerales_panel_1.png', type: 'image' },
    { filename: 'graficos_1_Disponibilidad_Confiabilidad.pdf', path: '/src/data/graficos_1_Disponibilidad_Confiabilidad.pdf', type: 'pdf' },
    { filename: 'graficos_2_Desgaste_Confiabilidad.pdf', path: '/src/data/graficos_2_Desgaste_Confiabilidad.pdf', type: 'pdf' },
    { filename: 'datos_generados_Disponibilidad.csv', path: '/src/data/datos_generados_Disponibilidad.csv', type: 'csv' },
    { filename: 'metricas_confiabilidad.csv', path: '/src/data/metricas_confiabilidad.csv', type: 'csv' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12 animate-fadeIn">
        <ProjectCard project={project} />
        <DocumentsSection documents={documents} />
      </main>
      
      <Footer />
    </div>
  );
};

export default DashboardPage;