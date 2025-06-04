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
    title: 'Propuesta de Plan Mantenimiento Predictivo Tribologico a flota camiones CAEX',
    links: [
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

  // Lista completa de documentos
  const documents: Document[] = [
    { filename: 'Cobre_Cu_ppm_criticidad_pie.png', path: '/src/data/Cobre_Cu_ppm_criticidad_pie.png', type: 'image' },
    { filename: 'criticidad_minerales_panel_1.png', path: '/src/data/criticidad_minerales_panel_1.png', type: 'image' },
    { filename: 'criticidad_minerales_panel_2_RECONSTRUIDO.png', path: '/src/data/criticidad_minerales_panel_2_RECONSTRUIDO.png', type: 'image' },
    { filename: 'datos_generados_Disponibilidad.csv', path: '/src/data/datos_generados_Disponibilidad.csv', type: 'csv' },
    { filename: 'graficos_1_Disponibilidad_Confiabilidad.pdf', path: '/src/data/graficos_1_Disponibilidad_Confiabilidad.pdf', type: 'pdf' },
    { filename: 'graficos_2_Desgaste_Confiabilidad.pdf', path: '/src/data/graficos_2_Desgaste_Confiabilidad.pdf', type: 'pdf' },
    { filename: 'graficos_3_Unidades_TipoAceite.pdf', path: '/src/data/graficos_3_Unidades_TipoAceite.pdf', type: 'pdf' },
    { filename: 'graficos_metricas_confiabilidad.pdf', path: '/src/data/graficos_metricas_confiabilidad.pdf', type: 'pdf' },
    { filename: 'grafico_Flota_Marca_Confiabilidad_Disponibilidad_v2.pdf', path: '/src/data/grafico_Flota_Marca_Confiabilidad_Disponibilidad_v2.pdf', type: 'pdf' },
    { filename: 'Hierro_Fe_ppm_criticidad_pie.png', path: '/src/data/Hierro_Fe_ppm_criticidad_pie.png', type: 'image' },
    { filename: 'metricas_confiabilidad.csv', path: '/src/data/metricas_confiabilidad.csv', type: 'csv' },
    { filename: 'muestras_por_aceite_CATERPILLAR_mejorado.png', path: '/src/data/muestras_por_aceite_CATERPILLAR_mejorado.png', type: 'image' },
    { filename: 'muestras_por_aceite_KOMATSU.png', path: '/src/data/muestras_por_aceite_KOMATSU.png', type: 'image' },
    { filename: 'muestras_por_aceite_KOMATSU_mejorado.png', path: '/src/data/muestras_por_aceite_KOMATSU_mejorado.png', type: 'image' },
    { filename: 'niveles_agua_lineas_por_componente_y_marca.png', path: '/src/data/niveles_agua_lineas_por_componente_y_marca.png', type: 'image' },
    { filename: 'particulas_por_criticidad.png', path: '/src/data/particulas_por_criticidad.png', type: 'image' },
    { filename: 'punto_inflamacion_boxplot_por_aceite_y_marca.png', path: '/src/data/punto_inflamacion_boxplot_por_aceite_y_marca.png', type: 'image' },
    { filename: 'punto_inflamacion_vs_aceite_por_marca.png', path: '/src/data/punto_inflamacion_vs_aceite_por_marca.png', type: 'image' },
    { filename: 'Silicio_Si_ppm_criticidad_pie.png', path: '/src/data/Silicio_Si_ppm_criticidad_pie.png', type: 'image' },
    { filename: 'situacion_actual_resumen_graficos.pdf', path: '/src/data/situacion_actual_resumen_graficos.pdf', type: 'pdf' },
    { filename: 'tan_vs_tbn_dispersion.png', path: '/src/data/tan_vs_tbn_dispersion.png', type: 'image' },
    { filename: 'viscosidad_por_criticidad.png', path: '/src/data/viscosidad_por_criticidad.png', type: 'image' }
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