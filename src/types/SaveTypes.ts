// ... existing code ...
export interface InventoryItem {
    itemId: string;
    count: number;
}

export interface PlayerState {
    x: number;
    y: number;
    sanity: number;
    stamina: number;
    inventory: InventoryItem[];
    direction: 'up' | 'down' | 'left' | 'right';
}

export interface SaveData {
    version: string;
    levelId: string;
    playerState: PlayerState;
    discoveredRules: string[];
    triggeredEvents: string[];
    gameTime: number;
    monsterStates: Record<string, any>;
}
// ... existing code ...