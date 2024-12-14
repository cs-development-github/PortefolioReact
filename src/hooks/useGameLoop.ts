import { useEffect } from 'react';
import { useGame } from '../contexts/GameContext';

const useGameLoop = () => {
  const { player, setPlayer, enemies, setEnemies } = useGame();

  useEffect(() => {
    let animationFrameId: number;

    const updateGame = () => {
      // === Mise à jour des ennemis ===
      setEnemies((prevEnemies) =>
        prevEnemies.map((enemy) => {
          const dx = player.position.x - enemy.position.x;
          const dy = player.position.y - enemy.position.y;

          const distance = Math.sqrt(dx ** 2 + dy ** 2);

          // Collision avec le joueur
          if (distance < 20) {
            console.log(`Enemy ${enemy.id} attacked the player!`);
            return enemy; // Ne change pas la position, mais tu peux ajouter une logique ici
          }

          // Déplacement vers le joueur
          const magnitude = Math.sqrt(dx ** 2 + dy ** 2);
          const direction = {
            x: dx / magnitude || 0,
            y: dy / magnitude || 0,
          };

          const speed = enemy.speed || 2;
          const newPosition = {
            x: enemy.position.x + direction.x * speed,
            y: enemy.position.y + direction.y * speed,
          };

          return { ...enemy, position: newPosition };
        })
      );

      // === Répéter la boucle ===
      animationFrameId = requestAnimationFrame(updateGame);
    };

    animationFrameId = requestAnimationFrame(updateGame);

    return () => cancelAnimationFrame(animationFrameId); // Nettoyage
  }, [player.position, setEnemies]);
};

export default useGameLoop;