import Particle from './particle.js';

export default class Explosion extends Particle {
    constructor(id, x, y) {
        super(id, x, y, 0, 48, 0);
        this._damage = 0;
    }

    get damage() {
        return this._damage;
    }
}
