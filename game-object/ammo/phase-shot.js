import Bullet from '../abstract/bullet.js';

export default class PhaseShot extends Bullet {
    constructor(drone, x, y, angle, velocity) {
        super(drone, x, y, 52, 5, angle, velocity, 16);
    }
}
