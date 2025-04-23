
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface DevotionalCardProps {
  id: number;
  title: string;
  verse: string;
  reference: string;
  snippet: string;
  image?: string;
}

const DevotionalCard = ({
  id,
  title,
  verse,
  reference,
  snippet,
  image
}: DevotionalCardProps) => {
  return (
    <Card className="h-full card-hover overflow-hidden">
      {image && (
        <div className="h-40 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover" 
          />
        </div>
      )}
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="bg-upa-100 p-3 rounded-md italic mb-3 text-sm">
          "{verse}" <span className="font-medium block mt-1 text-upa-600">{reference}</span>
        </div>
        <p className="text-gray-600 line-clamp-3">{snippet}</p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="outline" asChild>
          <Link to={`/devocional/${id}`}>Ler mais</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DevotionalCard;
