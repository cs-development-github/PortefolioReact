import { Enemy } from "../models/GameModels";

export const initializeEnemies = (): Enemy[] => {
  const generateRandomPosition = (): { x: number; y: number } => ({
    x: Math.floor(Math.random() * window.innerWidth),
    y: Math.floor(Math.random() * window.innerHeight),
  });

  const generateRandomHp = (): number => Math.floor(Math.random() * 100) + 50;

  return Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    position: generateRandomPosition(),
    hp: generateRandomHp(),
  }));
};