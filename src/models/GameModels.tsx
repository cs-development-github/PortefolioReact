// Interface pour la position
export interface Position {
    x: number;
    y: number;
}

// Interface pour le joueur
export interface Player {
    position: Position;
}

// Interface pour un ennemi
export interface Enemy {
    id: number;
    position: Position;
    hp: number;
}
