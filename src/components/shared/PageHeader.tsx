
import React, { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  image?: string;
  gradient?: boolean;
  children?: ReactNode;
}

const PageHeader = ({
  title,
  description,
  image,
  gradient = true,
  children
}: PageHeaderProps) => {
  return (
    <div className={`relative overflow-hidden ${image ? 'py-20' : 'py-12'}`}>
      {image && (
        <div className="absolute inset-0 z-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}
      
      {gradient && !image && (
        <div className="absolute inset-0 bg-blue-gradient opacity-10" />
      )}
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${image ? 'text-white' : 'blue-gradient-text'}`}>
            {title}
          </h1>
          
          {description && (
            <p className={`text-lg ${image ? 'text-gray-200' : 'text-gray-600'} mb-6`}>
              {description}
            </p>
          )}
          
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
