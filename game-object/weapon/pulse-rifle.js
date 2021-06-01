import Weapon from '../abstract/weapon.js';
import PulseShot from '../ammo/pulse-shot.js';

export default class PulseRifle extends Weapon {
    constructor(drone, x, y, angle, gimbal) {
        const fireRate = 2.3;
        const round = PulseShot;
        super(drone, 'Pulse Rifle', '#8aa', x, y, angle, gimbal, round, fireRate);
    }

    fire() {
        super.fire();
    }
}
