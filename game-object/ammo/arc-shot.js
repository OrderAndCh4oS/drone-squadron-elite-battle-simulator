import Bullet from '../abstract/bullet.js';

export default class ArcShot extends Bullet {
    constructor(drone, x, y, angle, velocity) {
        super(drone, x, y, 38, 3, angle, velocity, 1);
    }
}
