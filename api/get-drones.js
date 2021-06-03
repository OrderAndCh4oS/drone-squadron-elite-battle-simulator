import enemyQueue from '../data/enemy-drones/enemy-queue.js';
import { promises as fs } from 'fs';
import playerSquadrons from '../constants/player-squadrons.js';

export const fetchEnemySquadron = async (rank) => {
    const enemy = enemyQueue[rank];
    const enemySquadronData = await fs.readFile(
        `./data/enemy-drones/${enemy.id}_${enemy.seed}/squadron.json`, 'utf-8');
    return JSON.parse(enemySquadronData);
};

export const fetchPlayerSquadron = async(currentPlayer) => {
    const playerSquadronData = await fs.readFile(
        `./data/player-drones/${playerSquadrons[currentPlayer]}`);
    return JSON.parse(playerSquadronData);
};
