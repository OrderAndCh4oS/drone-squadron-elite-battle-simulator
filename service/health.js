
export default class Heath {
    constructor(health) {
        this._health = health;
        this._currentHealth = health;
    }

    get health() {
        return this._health;
    }

    get currentHealth() {
        return this._currentHealth;
    }

    takeDamage(damage) {
        this._currentHealth -= damage;
    }
}
