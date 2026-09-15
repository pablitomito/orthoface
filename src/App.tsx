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
    <div className="min-h-screen bg-brand-canvas text-brand-deep font-sans antialiased flex flex-col selection:bg-brand selection:text-white">
      <SplashScreen />
      <Header />
      <main className="flex-1">
        <Hero />

        <div className="section-divider" aria-hidden="true">
          <div className="section-divider-line" />
        </div>

        <Tratamentos />

        <div className="section-divider" aria-hidden="true">
          <div className="section-divider-line" />
        </div>

        <CasoDestaque />

        <div className="section-divider" aria-hidden="true">
          <div className="section-divider-line" />
        </div>

        <Resultados />

        <div className="section-divider" aria-hidden="true">
          <div className="section-divider-line" />
        </div>

        <AOrthoface />

        <div className="section-divider" aria-hidden="true">
          <div className="section-divider-line" />
        </div>

        <Profissional />

        <div className="section-divider" aria-hidden="true">
          <div className="section-divider-line" />
        </div>

        <Localizacao />

        <div className="section-divider" aria-hidden="true">
          <div className="section-divider-line" />
        </div>

        <FAQ />

        <div className="section-divider" aria-hidden="true">
          <div className="section-divider-line" />
        </div>

        <CTAEncerramento />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
};

export default App;
