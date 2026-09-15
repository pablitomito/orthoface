import React from 'react';
import { SplashScreen } from './components/SplashScreen';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Tratamentos } from './components/Tratamentos';
import { CasoDestaque } from './components/CasoDestaque';
import { Resultados } from './components/Resultados';
import { AOrthoface } from './components/AOrthoface';
import { Profissional } from './components/Profissional';
import { Localizacao } from './components/Localizacao';
import { FAQ } from './components/FAQ';
import { CTAEncerramento } from './components/CTAEncerramento';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-brand-deep font-sans antialiased flex flex-col">
      <SplashScreen />
      <Header />
      <main className="flex-1">
        <Hero />
        <Tratamentos />
        <CasoDestaque />
        <Resultados />
        <AOrthoface />
        <Profissional />
        <Localizacao />
        <FAQ />
        <CTAEncerramento />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
};

export default App;
