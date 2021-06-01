import Weapon from '../abstract/weapon.js';
import FusionShot from '../ammo/fusion-shot.js';

export default class FusionCannon extends Weapon {
    constructor(drone, x, y, angle, gimbal) {
        const fireRate = 4.5;
        const round = FusionShot;
        super(drone, 'Fusion Cannon', '#577', x, y, angle, gimbal, round, fireRate);
    }

    fire() {
        super.fire();
    }
}
