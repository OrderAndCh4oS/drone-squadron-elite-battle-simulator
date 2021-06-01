import Weapon from '../abstract/weapon.js';
import { pm } from '../../constants/constants.js';
import ArcShot from '../ammo/arc-shot.js';

export default class ArcGun extends Weapon {
    constructor(drone, x, y, angle, gimbal) {
        const fireRate = 6;
        const round = ArcShot;
        super(drone, 'Arc Gun', '#664', x, y, angle, gimbal, round, fireRate);
    }

    fire() {
        for(let i = 0; i < 12; i++) {
            const scatter = Math.random() * 0.08 - 0.04;
            pm.addParticle(
                new this.round(
                    this.drone,
                    this.position.x,
                    this.position.y,
                    this.gimbal.vector.getAngle() + this.droneAngle + scatter,
                    this.velocity,
                ),
            );
        }
    }
}
