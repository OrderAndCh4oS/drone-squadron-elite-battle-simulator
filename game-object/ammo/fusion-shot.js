import Bullet from '../abstract/bullet.js';

export default class FusionShot extends Bullet {
    constructor(drone, x, y, angle, velocity) {
        super(drone, x, y, 47, 7, angle, velocity, 8);
    }
}
