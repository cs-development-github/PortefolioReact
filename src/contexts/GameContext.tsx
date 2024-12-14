import React, { createContext, useContext, useState } from "react";
import { Player, Enemy } from "../models/GameModels";
import { initializeEnemies } from "../mappers/EnemyMapper";

interface GameContextProps {
  player: Player;
  setPlayer: React.Dispatch<React.SetStateAction<Player>>;
  enemies: Enemy[];
  setEnemies: React.Dispatch<React.SetStateAction<Enemy[]>>;
}

const GameContext = createContext<GameContextProps | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [player, setPlayer] = useState<Player>({ position: { x: 100, y: 100 } });
  const [enemies, setEnemies] = useState<Enemy[]>(initializeEnemies());

  return (
    <GameContext.Provider value={{ player, setPlayer, enemies, setEnemies }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = (): GameContextProps => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
