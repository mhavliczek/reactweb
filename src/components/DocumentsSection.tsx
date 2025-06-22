import React from 'react';
import { Document } from '../types';
import { FileText, FileSpreadsheet, Image as ImageIcon, ChevronDown } from 'lucide-react';

const DocumentsSection: React.FC = () => {
  const getDocumentIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText size={48} className="text-red-500" />;
      case 'csv':
        return <FileSpreadsheet size={48} className="text-green-500" />;
      case 'image':
        return <ImageIcon size={48} className="text-blue-500" />;
      case 'docx':
        return <FileText size={48} className="text-blue-600" />;
      default:
        return <FileText size={48} className="text-gray-500" />;
    }
  };

  // Documentos de Cátedra 1
  const catedra1Documents: Document[] = [
    { filename: 'Grupo9-Mauricio_Havliczek-Rodrigo_Macheo-Natalia_RojasNRC_6047.pdf', path: '/data/Catedra1/Grupo9-Mauricio_Havliczek-Rodrigo_Macheo-Natalia_RojasNRC_6047.pdf', type: 'pdf' }
  ];

  // Documentos de Cátedra 2
  const catedra2Documents: Document[] = [
    { filename: 'Grupo 9 - Sandra Barrera_Mauricio_Havliczek-Rodrigo_Macheo-Natalia_Rojas - NRC_6047.docx', path: '/data/Catedra2/Grupo 9 - Sandra Barrera_Mauricio_Havliczek-Rodrigo_Macheo-Natalia_Rojas - NRC_6047.docx', type: 'docx' }
  ];

  // Documentos de Archivos (todos los demás)
  const archivosDocuments: Document[] = [
    { filename: 'viscosidad_por_criticidad.png', path: '/data/Archivos/viscosidad_por_criticidad.png', type: 'image' },
    { filename: 'tan_vs_tbn_dispersion.png', path: '/data/Archivos/tan_vs_tbn_dispersion.png', type: 'image' },
    { filename: 'situacion_actual_resumen_graficos.pdf', path: '/data/Archivos/situacion_actual_resumen_graficos.pdf', type: 'pdf' },
    { filename: 'punto_inflamacion_vs_aceite_por_marca.png', path: '/data/Archivos/punto_inflamacion_vs_aceite_por_marca.png', type: 'image' },
    { filename: 'punto_inflamacion_boxplot_por_aceite_y_marca.png', path: '/data/Archivos/punto_inflamacion_boxplot_por_aceite_y_marca.png', type: 'image' },
    { filename: 'particulas_por_criticidad.png', path: '/data/Archivos/particulas_por_criticidad.png', type: 'image' },
    { filename: 'niveles_agua_lineas_por_componente_y_marca.png', path: '/data/Archivos/niveles_agua_lineas_por_componente_y_marca.png', type: 'image' },
    { filename: 'muestras_por_aceite_KOMATSU.png', path: '/data/Archivos/muestras_por_aceite_KOMATSU.png', type: 'image' },
    { filename: 'muestras_por_aceite_KOMATSU_mejorado.png', path: '/data/Archivos/muestras_por_aceite_KOMATSU_mejorado.png', type: 'image' },
    { filename: 'metricas_confiabilidad.csv', path: '/data/Archivos/metricas_confiabilidad.csv', type: 'csv' },
    { filename: 'muestras_por_aceite_CATERPILLAR_mejorado.png', path: '/data/Archivos/muestras_por_aceite_CATERPILLAR_mejorado.png', type: 'image' },
    { filename: 'graficos_3_Unidades_TipoAceite.pdf', path: '/data/Archivos/graficos_3_Unidades_TipoAceite.pdf', type: 'pdf' },
    { filename: 'graficos_metricas_confiabilidad.pdf', path: '/data/Archivos/graficos_metricas_confiabilidad.pdf', type: 'pdf' },
    { filename: 'graficos_1_Disponibilidad_Confiabilidad.pdf', path: '/data/Archivos/graficos_1_Disponibilidad_Confiabilidad.pdf', type: 'pdf' },
    { filename: 'graficos_2_Desgaste_Confiabilidad.pdf', path: '/data/Archivos/graficos_2_Desgaste_Confiabilidad.pdf', type: 'pdf' },
    { filename: 'datos_generados_Disponibilidad.csv', path: '/data/Archivos/datos_generados_Disponibilidad.csv', type: 'csv' },
    { filename: 'grafico_Flota_Marca_Confiabilidad_Disponibilidad_v2.pdf', path: '/data/Archivos/grafico_Flota_Marca_Confiabilidad_Disponibilidad_v2.pdf', type: 'pdf' },
    { filename: 'criticidad_minerales_panel_2_RECONSTRUIDO.png', path: '/data/Archivos/criticidad_minerales_panel_2_RECONSTRUIDO.png', type: 'image' },
    { filename: 'criticidad_minerales_panel_1.png', path: '/data/Archivos/criticidad_minerales_panel_1.png', type: 'image' },
    { filename: 'Silicio_Si_ppm_criticidad_pie.png', path: '/data/Archivos/Silicio_Si_ppm_criticidad_pie.png', type: 'image' },
    { filename: 'Hierro_Fe_ppm_criticidad_pie.png', path: '/data/Archivos/Hierro_Fe_ppm_criticidad_pie.png', type: 'image' },
    { filename: 'Cobre_Cu_ppm_criticidad_pie.png', path: '/data/Archivos/Cobre_Cu_ppm_criticidad_pie.png', type: 'image' }
  ];

  const renderDocumentGrid = (documents: Document[], sectionTitle: string) => (
    <details className="group mb-8" open>
      <summary className="cursor-pointer list-none bg-[#e67e22] text-white p-4 rounded-lg mb-6 flex items-center justify-between">
        <span className="text-xl font-semibold">{sectionTitle}</span>
        <ChevronDown className="w-6 h-6 transition-transform group-open:rotate-180" />
      </summary>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
        {documents.map((doc, index) => {
          const title = doc.filename.replace(/\.\w+$/, '').replace(/_/g, ' ');
          
          return (
            <div 
              key={index} 
              className="doc-card h-full flex flex-col"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <h6 className="font-semibold text-[#1a1a1a] mb-2 line-clamp-2">{title}</h6>
              
              <div className="flex-grow flex items-center justify-center py-4">
                {doc.type === 'image' ? (
                  <img 
                    src={doc.path} 
                    alt={title}
                    className="w-full h-[160px] object-cover rounded"
                  />
                ) : (
                  <div className="flex items-center justify-center">
                    {getDocumentIcon(doc.type)}
                  </div>
                )}
              </div>
              
              <div className="mt-auto">
                <a 
                  href={doc.path}
                  download
                  className="btn-outline-orange w-full text-center text-sm py-2 flex items-center justify-center"
                >
                  {doc.type === 'csv' ? 'Descargar CSV' : 
                   doc.type === 'docx' ? 'Descargar DOCX' : 'Ver / Descargar'}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </details>
  );

  return (
    <section className="bg-[#f8f9fa] p-8 rounded-2xl mt-12 animate-fadeIn">
      <h4 className="text-2xl font-bold text-center mb-8">Documentos Del Proyecto</h4>
      
      {/* Sección Cátedra 1 */}
      {renderDocumentGrid(catedra1Documents, 'Cátedra 1 - Primera Entrega')}
      
      {/* Sección Cátedra 2 */}
      {renderDocumentGrid(catedra2Documents, 'Cátedra 2 - Segunda Entrega')}
      
      {/* Sección Archivos */}
      {renderDocumentGrid(archivosDocuments, 'Archivos del Proyecto')}
    </section>
  );
};

export default DocumentsSection;