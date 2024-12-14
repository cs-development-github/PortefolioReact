import { useEffect, useRef, useState } from 'react';
import { useGame } from '../contexts/GameContext';

const usePlayerMovement = () => {
  const { player, setPlayer } = useGame();
  const pressedKeys = useRef<Set<string>>(new Set());
  const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  // Mettre à jour les dimensions de l'écran lors d'un redimensionnement
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      pressedKeys.current.add(e.key);
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      pressedKeys.current.delete(e.key);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const updatePlayerPosition = () => {
      const speed = 5;
      let newPosition = { ...player.position };

      // Déplacements basés sur les touches pressées
      if (pressedKeys.current.has('ArrowUp') || pressedKeys.current.has('z')) {
        newPosition.y -= speed; // Monte
      }
      if (pressedKeys.current.has('ArrowDown') || pressedKeys.current.has('s')) {
        newPosition.y += speed; // Descend
      }
      if (pressedKeys.current.has('ArrowLeft') || pressedKeys.current.has('q')) {
        newPosition.x -= speed; // Gauche
      }
      if (pressedKeys.current.has('ArrowRight') || pressedKeys.current.has('d')) {
        newPosition.x += speed; // Droite
      }

      // Limiter les mouvements dans les bornes dynamiques de l'écran
      newPosition.x = Math.max(0, Math.min(newPosition.x, screenSize.width));
      newPosition.y = Math.max(0, Math.min(newPosition.y, screenSize.height));

      // Mettre à jour la position si elle a changé
      if (newPosition.x !== player.position.x || newPosition.y !== player.position.y) {
        setPlayer({ ...player, position: newPosition });
      }

      // Continuer la boucle d'animation
      animationFrameId = requestAnimationFrame(updatePlayerPosition);
    };

    animationFrameId = requestAnimationFrame(updatePlayerPosition);

    return () => cancelAnimationFrame(animationFrameId); // Nettoyage
  }, [player, setPlayer, screenSize]);

  return null;
};

export default usePlayerMovement;