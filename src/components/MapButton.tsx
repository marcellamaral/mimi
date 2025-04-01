
import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface MapButtonProps {
  coordinates: string;
  appName: 'google' | 'waze';
}

const MapButton: React.FC<MapButtonProps> = ({ coordinates, appName }) => {
  const getMapUrl = () => {
    if (appName === 'google') {
      return `https://www.google.com/maps?q=${coordinates}`;
    } else if (appName === 'waze') {
      const [lat, lng] = coordinates.split(',');
      return `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;
    }
    return '';
  };
  
  return (
    <a 
      href={getMapUrl()} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-festa-ouro text-festa-preto font-semibold transition-all hover:bg-festa-ouro-claro hover:shadow-lg"
    >
      {appName === 'google' ? (
        <MapPin size={18} />
      ) : (
        <Navigation size={18} />
      )}
      {appName === 'google' ? 'Google Maps' : 'Waze'}
    </a>
  );
};

export default MapButton;
