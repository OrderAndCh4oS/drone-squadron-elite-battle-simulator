import {
    chassisValues,
    gimbalValues, scannerValues,
    steeringValues,
    thrusterValues, weaponValues,
} from '../constants/constants.js';
import Particle from './abstract/particle.js';
import Health from '../service/health.js';
import { deltaTime } from '../service/delta-time.js';

export default class Drone extends Particle {
    constructor(drone, squad, x, y, angle) {
        super(drone.id, x, y, 0, 13, angle);
        this._squadId = squad.id;
        this._colour = squad.colour;
        this.name = drone.name;
        this.value = drone.value;
        this.weapon = new weaponValues[drone.weapon](this, x, y, angle, gimbalValues[drone.gimbal]);
        this.scanner = new scannerValues[drone.scanner]();
        this.thruster = new thrusterValues[drone.thruster]();
        this.steering = new steeringValues[drone.steering]();
        this.chassis = new chassisValues[drone.chassis]();
        this.health = new Health(this.chassis.health);
        this._damage = 0;
        this._kills = 0;
        this._killed = [];
        this._diedAt = null;
    }

    get killed() {
        return this._killed;
    }

    get diedAt() {
        return this._diedAt;
    }

    set diedAt(value) {
        this._diedAt = value;
    }

    get damage() {
        return this._damage;
    }

    get kills() {
        return this._kills;
    }

    get squadId() {
        return this._squadId;
    }

    get angle() {
        return this.vector.getAngle();
    }

    set angle(angle) {
        this.vector.setAngle(angle);
    }

    updateDamage(damage) {
        this._damage += damage;
    }

    updateKills(killedDrone) {
        killedDrone.diedAt = deltaTime.getElapsedTime()
        this._kills++;
        this._killed.push(killedDrone);
    }

    update() {
        this.scanner.scanArea(this);
        this.thruster.setPower(this);
        this.steering.turn(this);
        if(this.thruster.isThrusting()) {
            this.velocity.setAngle(this.vector.getAngle());
        }
        this.move();
        this.weapon.update(this);
    }
}
