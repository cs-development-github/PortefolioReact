import React from 'react';
import Player from '../components/HomePage/Player/Player';
import Enemy from '../components/HomePage/Enemy/Enemy';
import { useGame } from '../contexts/GameContext';
import usePlayerMovement from '../hooks/usePlayerMovement';
import useGameLoop from '../hooks/useGameLoop';

const HomePage: React.FC = () => {
  const { player, enemies, setEnemies } = useGame();

  usePlayerMovement(); // Gère le déplacement du joueur
  useGameLoop(); // Gère le déplacement des ennemis et la synchronisation

  const attackEnemy = (id: number): void => {
    setEnemies((prev) =>
      prev.map((enemy) =>
        enemy.id === id ? { ...enemy, hp: Math.max(enemy.hp - 20, 0) } : enemy
      )
    );
  };

  return (
    <div style={{ position: 'relative', background: '#f0f0f0' }}>
      <Player position={player.position} />
      {enemies.map(
        (enemy) =>
          enemy.hp > 0 && (
            <Enemy
              key={enemy.id}
              id={enemy.id}
              position={enemy.position}
              hp={enemy.hp}
              onClick={attackEnemy}
            />
          )
      )}
    </div>
  );
};

export default HomePage;