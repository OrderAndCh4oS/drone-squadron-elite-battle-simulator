import { chassis, scanners, steering, thrusters } from './constants/utilities.js';
import ObjectsToCsv from 'objects-to-csv';
import path from 'path';

export default class Stats {
    _highScores = [];
    _squadronStats = [];
    _droneStats = [];

    addStatsFor(uid, squadron, rank, wld, survivingDrones, roundTime, width, height) {
        this._squadronStats.push({
            uid,
            name: squadron.name,
            rank,
            wld,
            kills: squadron.kills,
            health: squadron.health,
            survivingDrones,
            roundTime: roundTime.toFixed(),
            width,
            height
        });
        this._droneStats.push(...squadron.drones.map(d => ({
            uid,
            squadron: squadron.name,
            name: d.name,
            value: d.value,
            weapon: d.weapon.name,
            scanner: Object.keys(scanners)[d.scanner.id],
            thruster: Object.keys(thrusters)[d.thruster.id],
            steering: Object.keys(steering)[d.steering.id],
            chassis: Object.keys(chassis)[d.chassis.id],
            startingHealth: d.health.health,
            health: d.health.currentHealth,
            damage: d.damage,
            kills: d.kills,
            diedAt: d.diedAt?.toFixed(2) || '',
            roundTime: roundTime.toFixed(),
            width,
            height
        })));
    }

    addHighScore(uid, squadron, highScore, rank, width, height) {
        this._highScores.push({
            uid,
            squadron: squadron.name,
            highScore,
            rank,
            width,
            height
        });
    }

    async write(filePath = './', append = false) {
        await new ObjectsToCsv(this._squadronStats).toDisk(path.join(filePath, `squadrons-stats.csv`),
            {append});
        await new ObjectsToCsv(this._droneStats).toDisk(path.join(filePath, `drones-stats.csv`),
            {append});
        await new ObjectsToCsv(this._highScores).toDisk(path.join(filePath, `high-scores.csv`),
            {append});
    }
}
