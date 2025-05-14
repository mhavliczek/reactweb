import React from 'react';
import { Document } from '../types';
import { FileText, FileSpreadsheet, Image as ImageIcon, ChevronDown } from 'lucide-react';

interface DocumentsSectionProps {
  documents: Document[];
}

const DocumentsSection: React.FC<DocumentsSectionProps> = ({ documents }) => {
  const getDocumentIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText size={48} className="text-red-500" />;
      case 'csv':
        return <FileSpreadsheet size={48} className="text-green-500" />;
      case 'image':
        return <ImageIcon size={48} className="text-blue-500" />;
      default:
        return <FileText size={48} className="text-gray-500" />;
    }
  };

  return (
    <section className="bg-[#f8f9fa] p-8 rounded-2xl mt-12 animate-fadeIn">
      <h4 className="text-2xl font-bold text-center mb-8">Documentos Del Proyecto</h4>
      
      <details className="group" open>
        <summary className="cursor-pointer list-none bg-[#e67e22] text-white p-4 rounded-lg mb-6 flex items-center justify-between">
          <span className="text-xl font-semibold">Entrega - Catedra 1</span>
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
                    download=""
                    className="btn-outline-orange w-full text-center text-sm py-2 flex items-center justify-center"
                  >
                    {doc.type === 'csv' ? 'Descargar CSV' : 'Ver / Descargar'}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </details>
    </section>
  );
};

export default DocumentsSection;