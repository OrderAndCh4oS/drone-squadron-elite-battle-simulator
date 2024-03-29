class DeltaTime {
    _spoofedTime = 0;
    constructor() {
        this.startTime = Date.now();
        this.lastTime = Date.now();
        this.currentTime = Date.now();
        this.deltaTime = 0;
    }

    reset() {
        this._spoofedTime = 0;
        this.startTime = Date.now();
        this.lastTime = Date.now();
        this.currentTime = Date.now();
        this.deltaTime = 0;
    }

    update() {
        this.currentTime = Date.now() + this._spoofedTime;
        this.deltaTime = this.currentTime - this.lastTime;
        this.lastTime = this.currentTime;
    }

    getTime() {
        return this.deltaTime / 100;
    }

    getOffsetTime(offset) {
        return this.deltaTime / 100 + offset;
    }

    getElapsedTime() {
        return (this.currentTime - this.startTime) / 100;
    }

    getOffsetElapsedTime(offset) {
        return (this.currentTime - this.startTime) / 100 + offset;
    }

    spoofTimePassing(ms) {
        this._spoofedTime += ms;
    }
}

export const deltaTime = new DeltaTime();
