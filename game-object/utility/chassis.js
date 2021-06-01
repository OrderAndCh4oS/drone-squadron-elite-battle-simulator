export default class Chassis {

    constructor(id, health) {
        this._id = id;
        this._health = health;
    }

    get id() {
        return this._id;
    }

    get health() {
        return this._health;
    }
}
