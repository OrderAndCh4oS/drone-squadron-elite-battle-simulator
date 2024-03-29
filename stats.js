import { chassis, gimbals, scanners, steering, thrusters } from './constants/utilities.js';
import ObjectsToCsv from 'objects-to-csv';
import path from 'path';
import { height, width } from './constants/constants.js';
import fs from 'fs';
import pad from './helpers.js';

export default class Stats {
    _highScores = [];
    _squadronStats = [];
    _droneStats = [];

    addStatsFor(
        uid, currentSquadron, squadron, rank, wld, survivingDrones, roundTime, width, height) {
        this._squadronStats.push({
            uid,
            number: `#${pad(currentSquadron + 1, 4)}`,
            name: squadron.name,
            rank,
            wld,
            kills: squadron.kills,
            health: squadron.health,
            survivingDrones,
            roundTime: roundTime.toFixed(),
            width,
            height,
        });
        this._droneStats.push(...squadron.drones.map(d => ({
            uid,
            number: `#${pad(currentSquadron + 1, 4)}`,
            squadron: squadron.name,
            name: d.name,
            value: d.value,
            weapon: d.weapon.name,
            gimbal: Object.keys(gimbals)[d.weapon.gimbal.id],
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
            height,
        })));
    }

    addHighScore(uid, currentSquadron, squadron, highScore, rank, width, height) {
        this._highScores.push({
            uid,
            number: `#${pad(currentSquadron + 1, 4)}`,
            squadron: squadron.name,
            highScore,
            rank,
            width,
            height,
        });
    }

    async write(filePath = './', append = false) {
        await new ObjectsToCsv(this._squadronStats).toDisk(
            path.join(filePath, `squadrons-stats_${width}x${height}.csv`),
            {append});
        await new ObjectsToCsv(this._droneStats).toDisk(
            path.join(filePath, `drones-stats_${width}x${height}.csv`),
            {append});
        await new ObjectsToCsv(this._highScores).toDisk(
            path.join(filePath, `high-scores_${width}x${height}.csv`),
            {append});
    }

    async writeRoundRobin(filePath = './', round = 0,  append = false) {
        await new ObjectsToCsv(this._squadronStats).toDisk(
            path.join(filePath, `rr_round_${round+1}_squadrons-stats_${width}x${height}.csv`),
            {append});
        await new ObjectsToCsv(this._droneStats).toDisk(
            path.join(filePath, `rr_round_${round+1}_drones-stats_${width}x${height}.csv`),
            {append});
        const squadWldObj = this._squadronStats.reduce((obj, ss) => {
            obj[ss.name] = obj[ss.name] || {w: 0, l: 0, d: 0};
            switch(ss.wld) {
                case -1:
                    obj[ss.name].l++;
                    break;
                case 0:
                    obj[ss.name].d++;
                    break;
                case 1:
                    obj[ss.name].w++;
                    break;
            }
            return obj;
        }, {});
        const squadWldArr = Object.entries(squadWldObj).map(([name, wld]) => ({name, ...wld}))
        await new ObjectsToCsv(squadWldArr).toDisk(
            path.join(filePath, `rr_round_${round+1}_results_${width}x${height}.csv`),
            {append});
    }

    async writeSwissElimination(filePath = './',  append = false) {
        await new ObjectsToCsv(this._squadronStats).toDisk(
            path.join(filePath, `swiss_elimination_squadrons-stats_${width}x${height}.csv`),
            {append});
        await new ObjectsToCsv(this._droneStats).toDisk(
            path.join(filePath, `swiss_elimination_drones-stats_${width}x${height}.csv`),
            {append});
    }

    async writePickTopHighScores(filePath = './', append = false) {
        const weeklyHighScores = JSON.stringify(this._highScores.reduce((result, hs) => {
            const lastSquadHighScoreIndex = result.findIndex(r => r.number === hs.number);
            if(lastSquadHighScoreIndex === -1) {
                result.push(hs);
                return result;
            }
            if(result[lastSquadHighScoreIndex].highScore < hs.highScore) {
                result.splice(lastSquadHighScoreIndex, 1);
                result.push(hs);
            }
            return result;
        }, []).sort((a, b) => b.highScore - a.highScore));
        const file = path.join(filePath,
            `weekly-high-scores_${width}x${height}_${(new Date()).toISOString()
                .slice(0, 10)}.json`);
        fs.writeFileSync(file, weeklyHighScores);

    }
}
