
import React from 'react';
import { Instagram } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export interface MemberProps {
  id: number;
  name: string;
  role: string;
  localUpa: string;
  federation?: string;
  image: string;
  instagram: string;
  verse: string;
}

const MemberCard = ({
  name,
  role,
  localUpa,
  federation,
  image,
  instagram,
  verse
}: MemberProps) => {
  return (
    <Card className="overflow-hidden card-hover h-full">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={`${name} - ${role}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4 text-white">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-upa-200 font-medium">{role}</p>
          </div>
        </div>
      </div>
      <CardContent className="p-4 space-y-3">
        <div>
          <p className="text-sm font-medium text-gray-500">UPA Local</p>
          <p>{localUpa}</p>
        </div>
        
        {federation && (
          <div>
            <p className="text-sm font-medium text-gray-500">Federação</p>
            <p>{federation}</p>
          </div>
        )}
        
        <div className="flex items-center space-x-2">
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-upa-600 hover:text-upa-700 transition-colors"
          >
            <Instagram className="h-4 w-4 mr-1" />
            <span className="text-sm">Instagram</span>
          </a>
        </div>
        
        <div className="pt-2 border-t text-sm italic">
          "{verse}"
        </div>
      </CardContent>
    </Card>
  );
};

export default MemberCard;
