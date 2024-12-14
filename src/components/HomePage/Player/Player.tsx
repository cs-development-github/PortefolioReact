import React from "react";
import { Position } from "../../../models/GameModels";
import styles from "./Player.module.css";

interface PlayerProps {
  position: Position;
}

const Player: React.FC<PlayerProps> = ({ position }) => {
  return (
    <div
      className={styles.player}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    ></div>
  );
};

export default Player;