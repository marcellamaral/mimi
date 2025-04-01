import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import MapButton from '@/components/MapButton';
import Balloons from '@/components/Balloons';
import Confetti from '@/components/Confetti';

const Index: React.FC = () => {
  const coordinates = "-23.15928,-46.70286";
  
  return (
    <div className="min-h-screen bg-festa-preto overflow-hidden relative flex flex-col items-center justify-center py-10 px-4">
      {/* Background decorations */}
      <Balloons />
      <Confetti />
      
      {/* Pattern overlay for texture */}
      <div className="absolute inset-0 gold-sparkle opacity-20 pointer-events-none"></div>
      
      {/* Main content */}
      <div className="max-w-2xl w-full mx-auto bg-festa-preto border-2 border-festa-ouro rounded-lg p-8 md:p-12 relative z-10 shadow-2xl">
        <div className="text-center">
          {/* Título principal */}
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white tracking-wide mb-2">
            DE REPENTE
          </h2>
          
          {/* Número em destaque */}
          <div className="text-center my-6">
            <h1 className="gold-gradient-text font-playfair text-7xl md:text-9xl font-black">
              60
            </h1>
          </div>
          
          {/* Texto de destaque */}
          <p className="text-white font-playfair text-xl md:text-2xl mb-6 italic leading-relaxed">
            Melhor do que fazer 60 anos...<br />
            É estar com pessoas que fazem<br />
            parte da minha história!
          </p>
          
          <p className="text-festa-ouro text-sm md:text-base mb-6">
            Traga seu KIT churrasco e<br />
            a bebida desejada.
          </p>
          
          <h3 className="text-festa-ouro font-playfair text-xl md:text-3xl font-bold mb-8">
            Venha comemorar<br />comigo!
          </h3>
          
          {/* Data e endereço */}
          <div className="space-y-2 mb-8 text-white font-playfair text-lg md:text-2xl">
            <p className="font-bold">17 DE MAIO, SÁBADO</p>
            <p className="font-bold">A PARTIR DAS 10HS</p>
            <p>RUA: 7 - 196</p>
            <p>ESTÂNCIA MARÍLIA</p>
            <p>JARINU SP</p>
            <p>CHÁCARA BIANQUINHA</p>
          </div>
          
          {/* Botões de mapa */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <MapButton coordinates={coordinates} appName="google" />
            <MapButton coordinates={coordinates} appName="waze" />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-12 text-white/50 text-sm text-center">
        <p>Confirme sua presença até 10 de maio</p>
      </div>
    </div>
  );
};

export default Index;
