
import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export interface EventCardProps {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  isFeatured?: boolean;
  isPast?: boolean;
}

const EventCard = ({ 
  id, 
  title, 
  date, 
  time, 
  location, 
  image, 
  isFeatured = false,
  isPast = false 
}: EventCardProps) => {
  return (
    <div 
      className={`group overflow-hidden rounded-lg shadow-md card-hover
        ${isPast ? 'opacity-80' : ''}
        ${isFeatured ? 'md:col-span-2 bg-gradient-to-r from-upa-700/5 to-upa-500/5' : 'bg-white'}
      `}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        {!isPast && (
          <div className="absolute top-3 right-3 bg-upa-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            Em breve
          </div>
        )}
        {isPast && (
          <div className="absolute inset-0 bg-gray-900/40 flex items-center justify-center">
            <span className="bg-gray-900/70 text-white px-4 py-2 rounded-md font-medium">Evento Passado</span>
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-upa-500" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-upa-500" />
            <span>{time}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-upa-500" />
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button asChild variant={isPast ? "outline" : "default"}>
            <Link to={`/eventos/${id}`}>
              {isPast ? 'Ver detalhes' : 'Saber mais'}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
