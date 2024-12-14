import { useEffect, useCallback } from 'react';
import { Player } from '../models/GameModels';

interface UsePlayerMovementParams {
  player: Player;
  setPlayer: React.Dispatch<React.SetStateAction<Player>>;
}

const usePlayerMovement = ({ player, setPlayer }: UsePlayerMovementParams) => {
  const movePlayer = useCallback(
    (direction: string): void => {
      const step = 20;
      switch (direction) {
        case 'z': // Haut
          setPlayer((prev) => ({
            ...prev,
            position: { ...prev.position, y: Math.max(prev.position.y - step, 0) },
          }));
          break;
        case 's': // Bas
          setPlayer((prev) => ({
            ...prev,
            position: { ...prev.position, y: Math.min(prev.position.y + step, window.innerHeight - 50) },
          }));
          break;
        case 'q': // Gauche
          setPlayer((prev) => ({
            ...prev,
            position: { ...prev.position, x: Math.max(prev.position.x - step, 0) },
          }));
          break;
        case 'd': // Droite
          setPlayer((prev) => ({
            ...prev,
            position: { ...prev.position, x: Math.min(prev.position.x + step, window.innerWidth - 50) },
          }));
          break;
        default:
          break;
      }
    },
    [setPlayer]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      movePlayer(event.key);
    };

    window.addEventListener('keydown', handleKeyDown);

    // Nettoyage : enlève l'écouteur quand le composant est démonté
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [movePlayer]);

  return { movePlayer };
};

export default usePlayerMovement;
