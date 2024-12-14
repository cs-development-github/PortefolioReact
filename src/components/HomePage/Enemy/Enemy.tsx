import React from "react";
import { Position } from "../../../models/GameModels";
import styles from "./Enemy.module.css";

interface EnemyProps {
  id: number;
  position: Position;
  hp: number;
  onClick: (id: number) => void;
}

const Enemy: React.FC<EnemyProps> = ({ id, position, hp, onClick }) => {
  return (
    <div
      className={styles.enemy}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onClick={() => onClick(id)}
    >
      {hp}
    </div>
  );
};

export default Enemy;
