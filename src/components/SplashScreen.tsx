import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const SESSION_STORAGE_KEY = 'orthoface_splash_seen';
const DISPLAY_DURATION_MS = 2000;
const FADE_OUT_DURATION_MS = 600;

export const SplashScreen: React.FC = () => {
  const prefersReduced = useReducedMotion();

  // Avalia imediatamente se deve exibir: somente mobile (< 1024px) e apenas uma vez por sessão
  const [shouldShow] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      const alreadySeen = sessionStorage.getItem(SESSION_STORAGE_KEY) === 'true';
      const isMobile = window.innerWidth < 1024;
      return isMobile && !alreadySeen;
    } catch {
      return false;
    }
  });

  const [isMounted, setIsMounted] = useState<boolean>(shouldShow);
  const [logoVisible, setLogoVisible] = useState<boolean>(false);
  const [isExiting, setIsExiting] = useState<boolean>(false);

  const timerRef = useRef<number | null>(null);
  const cleanupTimerRef = useRef<number | null>(null);

  const triggerDismiss = useCallback(() => {
    setIsExiting((prev) => {
      if (prev) return prev; // já está saindo

      // Limpa timer de exibição automática se o usuário interagir antes
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }

      // Restaura o scroll imediatamente ao iniciar a saída
      document.body.style.overflow = '';

      // Tempo de fade-out antes de desmontar do DOM
      const fadeDuration = prefersReduced ? 50 : FADE_OUT_DURATION_MS;
      cleanupTimerRef.current = window.setTimeout(() => {
        setIsMounted(false);
      }, fadeDuration);

      return true;
    });
  }, [prefersReduced]);

  useEffect(() => {
    if (!shouldShow) return;

    // Registra na sessão que a splash foi apresentada
    try {
      sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
    } catch {
      // Falha silenciosa caso sessionStorage esteja desabilitado
    }

    // Trava o scroll do body durante a exibição da splash
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Se preferir movimento reduzido, finaliza rapidamente sem travar
    if (prefersReduced) {
      const quickTimer = window.setTimeout(() => {
        triggerDismiss();
      }, 500);
      return () => {
        window.clearTimeout(quickTimer);
        document.body.style.overflow = originalOverflow;
      };
    }

    // Inicia a animação de entrada suave do logotipo
    const entranceTimer = window.setTimeout(() => {
      setLogoVisible(true);
    }, 60);

    // Timer para fechar automaticamente após ~2s
    timerRef.current = window.setTimeout(() => {
      triggerDismiss();
    }, DISPLAY_DURATION_MS);

    // Eventos de interação para fechar imediatamente ao menor toque, clique ou rolagem
    const interactionEvents: (keyof WindowEventMap)[] = [
      'pointerdown',
      'touchstart',
      'wheel',
      'touchmove',
      'keydown',
    ];

    const handleInteraction = () => {
      triggerDismiss();
    };

    interactionEvents.forEach((event) => {
      window.addEventListener(event, handleInteraction, { passive: true, capture: true });
    });

    return () => {
      window.clearTimeout(entranceTimer);
      if (timerRef.current) window.clearTimeout(timerRef.current);
      if (cleanupTimerRef.current) window.clearTimeout(cleanupTimerRef.current);

      interactionEvents.forEach((event) => {
        window.removeEventListener(event, handleInteraction, { capture: true });
      });

      // Garante que o scroll sempre seja restaurado no unmount
      document.body.style.overflow = originalOverflow;
    };
  }, [shouldShow, prefersReduced, triggerDismiss]);

  // Se não deve mostrar ou já foi desmontado, não renderiza nada no DOM
  if (!isMounted) return null;

  return (
    <div
      aria-hidden={isExiting}
      role="presentation"
      className={`
        fixed inset-0 z-[99999] flex items-center justify-center
        bg-[#1F78A4] select-none lg:hidden
        ${isExiting ? 'pointer-events-none opacity-0' : 'opacity-100'}
        ${prefersReduced ? 'transition-none' : 'transition-opacity duration-600 ease-out'}
      `}
      style={{
        // Garante cobrir 100% da viewport real mesmo com barras de navegação do browser mobile
        height: '100dvh',
        width: '100vw',
      }}
    >
      <div
        className={`
          flex flex-col items-center justify-center p-6
          ${logoVisible && !isExiting ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.94]'}
          ${prefersReduced ? 'transition-none' : 'transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1)'}
        `}
      >
        <img
          src="/images/logo-orthoface.jpg"
          alt="Orthoface Odontologia Especializada"
          width={240}
          height={240}
          className="h-auto w-52 max-w-[70vw] object-contain select-none pointer-events-none drop-shadow-sm"
          loading="eager"
          decoding="sync"
        />
      </div>
    </div>
  );
};
