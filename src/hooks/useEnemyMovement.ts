import { useEffect } from 'react';
import { useGame } from '../contexts/GameContext';

const useEnemyMovement = () => {
  const { player, enemies, setEnemies } = useGame(); // Récupère l'état du joueur et des ennemis

  // Fonction pour mettre à jour la position des ennemis
  const updateEnemyPositions = () => {
    setEnemies((prevEnemies) =>
      prevEnemies.map((enemy) => {
        // Calcul de la direction vers le joueur
        const dx = player.position.x - enemy.position.x;
        const dy = player.position.y - enemy.position.y;

        const distance = Math.sqrt(dx ** 2 + dy ** 2);

        if (distance < 50) {
          return enemy;
        }

        // Normalisation pour définir la direction
        const magnitude = Math.sqrt(dx ** 2 + dy ** 2);
        const direction = {
          x: dx / magnitude || 0,
          y: dy / magnitude || 0,
        };

        // Calcul de la nouvelle position
        const speed = enemy.speed || 2; // Chaque ennemi peut avoir une vitesse différente
        const newPosition = {
          x: enemy.position.x + direction.x * speed,
          y: enemy.position.y + direction.y * speed,
        };

        return { ...enemy, position: newPosition };
      })
    );
  };

  useEffect(() => {
    const interval = setInterval(updateEnemyPositions, 50);
    return () => clearInterval(interval);
  }, [player.position, setEnemies]);
};

export default useEnemyMovement;