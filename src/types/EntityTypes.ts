// ... existing code ...
export enum EntityType {
    PLAYER = 'PLAYER',
    MONSTER = 'MONSTER',
    NPC = 'NPC',
    INTERACTABLE = 'INTERACTABLE'
}

export enum MonsterType {
    PATROL = 'Patrol',
    CHASE = 'Chase',
    STATIC = 'Static',
    MIMIC = 'Mimic'
}

export enum ItemType {
    KEY_ITEM = 'KeyItem',
    CONSUMABLE = 'Consumable',
    CLUE = 'Clue'
}

export interface MonsterConfig {
    id: string;
    name: string;
    type: MonsterType;
    speedWalk: number;
    speedChase: number;
    visionRadius: number;
    visionAngle: number;
    hearingRadius: number;
    damageSan: number;
    killPlayer: boolean;
    description: string;
}

export interface ItemConfig {
    id: string;
    name: string;
    type: ItemType;
    maxStack: number;
    effectType: string;
    effectValue: number;
    description: string;
}

export interface LevelConfig {
    id: string;
    name: string;
    mapFile: string;
    timeLimit: number;
    initialSan: number;
    monstersList: string[];
    itemsList: string[];
    description: string;
}
// ... existing code ...