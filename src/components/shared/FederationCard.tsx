
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface FederationCardProps {
  id: string;
  name: string;
  image: string;
  region: string;
  numLocalUpas: number;
}

const FederationCard = ({
  id,
  name,
  image,
  region,
  numLocalUpas
}: FederationCardProps) => {
  return (
    <div className="group relative h-64 overflow-hidden rounded-lg card-hover">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-5">
        <h3 className="text-white text-xl font-bold">{name}</h3>
        <p className="text-gray-200 mb-3">{region} • {numLocalUpas} UPAs Locais</p>
        <Button asChild variant="default" className="w-full">
          <Link to={`/federacoes/${id}`}>Ver Diretoria</Link>
        </Button>
      </div>
    </div>
  );
};

export default FederationCard;
