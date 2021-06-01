import Weapon from '../abstract/weapon.js';
import PhaseShot from '../ammo/phase-shot.js';

export default class PhaseRifle extends Weapon {
    constructor(drone, x, y, angle, gimbal) {
        const fireRate = 8;
        const round = PhaseShot;
        super(drone, 'Phase Rifle', '#577', x, y, angle, gimbal, round, fireRate);
    }

    fire() {
        super.fire();
    }
}
