import Weapon from '../abstract/weapon.js';
import PlasmaShot from '../ammo/plasma-shot.js';

export default class PlasmaCannon extends Weapon {
    constructor(drone, x, y, angle, gimbal) {
        const fireRate = 5.5;
        const round = PlasmaShot;
        super(drone, 'Plasma Cannon', '#577', x, y, angle, gimbal, round, fireRate);
    }

    fire() {
        super.fire();
    }
}
