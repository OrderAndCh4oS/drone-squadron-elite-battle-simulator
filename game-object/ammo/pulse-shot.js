import Bullet from '../abstract/bullet.js';

export default class PulseShot extends Bullet {
    constructor(drone, x, y, angle, velocity) {
        super(drone, x, y, 45, 4, angle, velocity, 3);
    }
}
