import {
    dm,
    game,
    grid,
    height,
    pm,
    scoreManager,
    squadrons,
    width,
} from './constants/constants.js';
import { deltaTime } from './service/delta-time.js';
import SquadronFactory from './factory/squadron-factory.js';
import ShortUniqueId from 'short-unique-id';
import Stats from './stats.js';
import playerSquadrons from './constants/player-squadrons.js';
import { fetchEnemySquadron, fetchPlayerSquadron } from './api/get-drones.js';

const uid = new ShortUniqueId();

let currentPlayer = 0;
const stats = new Stats();
let roundUid = uid();
let totalRuns = 3;
let runs = 0;

const requestAnimationFrame = f => {
    setImmediate(f);
};

const setupDrones = async() => {
    squadrons.splice(0, squadrons.length);
    const enemy = await fetchEnemySquadron(game.rank);
    const player = await fetchPlayerSquadron(currentPlayer);
    console.log(`${player.leader} vs ${enemy.leader}`);
    [
        {
            id: 1, name: 'Squadron ' + player.leader,
            drones: player.drones.map((d, i) => ({id: i, ...d})),
        },
        {
            id: 2, name: 'Squadron ' + enemy.leader,
            drones: enemy.drones.map((d, i) => ({id: i + player.drones.length + 1, ...d})),
        },
    ].map(s => squadrons.push(SquadronFactory.make(s)));
};

const start = async() => {
    await initialiseRound();
    deltaTime.reset();
    requestAnimationFrame(animate);
};

const initialiseRound = async() => {
    dm.init();
    pm.init();
    grid.init();
    await setupDrones();
    if(game.rank === 0) {
        scoreManager.resetPlayerOne();
    }
    scoreManager.resetPlayerTwo();
    game.state = 'playing';
};

async function startNextLevel() {
    console.log(scoreManager.playerOneScore);
    stats.addStatsFor(
        roundUid,
        currentPlayer,
        squadrons[0],
        game.rank,
        1,
        6 - squadrons[1]?.kills,
        deltaTime.getElapsedTime(),
        width,
        height
    );
    game.rank++;
    await start();
}

const startNextRound = async() => {
    game.state = 'stopped';
    game.rank = 0;
    runs = 0;
    currentPlayer++;
    if(currentPlayer < playerSquadrons.length) {
        await start();
    }
};

const endRound = async(isDraw = false) => {
    console.log('High Score:', scoreManager.playerOneScore);
    stats.addStatsFor(
        roundUid,
        currentPlayer,
        squadrons[0],
        game.rank,
        isDraw ? 0 : -1,
        6 - squadrons[1]?.kills,
        deltaTime.getElapsedTime(),
        width,
        height
    );
    stats.addHighScore(
        roundUid,
        currentPlayer,
        squadrons[0],
        scoreManager.playerOneScore,
        game.rank,
        width,
        height
    );
    scoreManager.reset();
    game.rank = 0;
    runs++;
    roundUid = uid();
    if(runs < totalRuns && game.rank <= 99) {
        await start();
    } else {
        await stats.write('./stats');
        await stats.writePickTopHighScores('./stats');
        await startNextRound();
    }
};

const animate = async() => {
    deltaTime.update();
    pm.update();
    dm.update();
    if(squadrons[0]?.health > 0 && squadrons[1]?.health <= 0) {
        console.log('Cleared rank ' + (game.rank + 1));
        await startNextLevel();
        return;
    }
    if(squadrons[0]?.health <= 0 && squadrons[1]?.health <= 0) {
        console.log('Drew at rank ' + (game.rank + 1));
        await endRound();
        return;
    }
    if(squadrons[0]?.health <= 0 && squadrons[1]?.health > 0) {
        console.log('Lost at rank ' + (game.rank + 1));
        await endRound();
        return;
    }
    deltaTime.spoofTimePassing(Math.random() * 14 + 6);
    requestAnimationFrame(animate);
};

await start();
