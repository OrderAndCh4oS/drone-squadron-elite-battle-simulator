import ParticleManager from '../manager/particle-manager.js';
import DroneManager from '../manager/drone-manager.js';
import GameGrid from '../service/game-grid.js';
import { chassis, gimbals, scanners, steering, thrusters } from './utilities.js';
import { weapons } from './weapons.js';
import ScoreManager from '../manager/score-manager.js';

export const width = 720;
export const height = 720;

export const game = {
    rank: 0,
    state: 'stopped',
};
export const friction = 0.8;
export const grid = new GameGrid();
export const squadrons = [];
export const dm = new DroneManager();
export const pm = new ParticleManager();
export const scoreManager = new ScoreManager();
export const chassisValues = Object.values(chassis);
export const weaponValues = Object.values(weapons);
export const scannerValues = Object.values(scanners);
export const thrusterValues = Object.values(thrusters);
export const steeringValues = Object.values(steering);
export const gimbalValues = Object.values(gimbals);
