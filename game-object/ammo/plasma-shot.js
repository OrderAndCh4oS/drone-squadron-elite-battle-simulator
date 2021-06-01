import Bullet from '../abstract/bullet.js';

export default class PlasmaShot extends Bullet {
    constructor(drone, x, y, angle, velocity) {
        super(drone, x, y, 50, 10, angle, velocity, 10);
    }
}
