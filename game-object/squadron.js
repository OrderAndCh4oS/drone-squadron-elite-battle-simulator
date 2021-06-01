
export default class Squadron {
    constructor(id, name) {
        this.id = id;
        this._name = name;
        this.drones = [];
    }

    get name() {
        return this._name;
    }

    get kills() {
        return this.drones
            .map(d => d.kills)
            .reduce((a, b) => a + b);
    }

    get health() {
        return this.drones
            .map(d => d.health.currentHealth > 0
                ? d.health.currentHealth
                : 0)
            .reduce((a, b) => a + b);
    }

    addDrone(drone) {
        this.drones.push(drone);
    }
}
