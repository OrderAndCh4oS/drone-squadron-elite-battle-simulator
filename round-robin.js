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
import { fetchPlayerSquadron } from './api/get-drones.js';

const roundRobin = (n) => {
    const DUMMY = -1;
    const rounds = [];
    const ps = [];
    for (let k = 0; k < n; k += 1) {
        ps.push(k);
    }

    if (n % 2 === 1) {
        ps.push(DUMMY);
        n += 1;
    }

    for (let j = 0; j < n - 1; j += 1) {
        rounds[j] = [];
        for (let i = 0; i < n / 2; i += 1) {
            if (ps[i] !== DUMMY && ps[n - 1 - i] !== DUMMY) {
                rounds[j].push([ps[i], ps[n - 1 - i]]);
            }
        }
        ps.splice(1, 0, ps.pop());
    }
    return rounds;
};

const uid = new ShortUniqueId();

let currentPairing = 0;
// let roundRobinPairs = roundRobin(playerSquadrons.length).flat(1);
let roundRobinPairs = roundRobin(6).flat(1);
let playerOne
let playerTwo
const playerStats = new Stats();
const playerTwoStats = new Stats();

const requestAnimationFrame = f => {
    setImmediate(f);
};

const setupDrones = async() => {
    squadrons.splice(0, squadrons.length);
    playerOne = await fetchPlayerSquadron(roundRobinPairs[currentPairing][0]);
    playerTwo = await fetchPlayerSquadron(roundRobinPairs[currentPairing][1]);
    console.log(`${playerOne.leader} vs ${playerTwo.leader}`);
    [
        {
            id: 1, name: playerOne.leader,
            drones: playerOne.drones.map((d, i) => ({id: i, ...d})),
        },
        {
            id: 2, name: playerTwo.leader,
            drones: playerTwo.drones.map((d, i) => ({id: i + playerOne.drones.length + 1, ...d})),
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
    scoreManager.resetPlayerOne();
    scoreManager.resetPlayerTwo();
    game.state = 'playing';
};

const startNextRound = async() => {
    game.state = 'stopped';
    currentPairing++;
    if(currentPairing < roundRobinPairs.length) {
        await start();
    }
};

const endRound = async(playerOneWld, playerTwoWld) => {
    console.log(playerOneWld, playerTwoWld)
    const roundName = `${playerOne.leader} vs ${playerTwo.leader}`;
    playerStats.addStatsFor(
        roundName,
        playerOne.id,
        squadrons[0],
        game.rank,
        playerOneWld,
        6 - squadrons[1]?.kills,
        deltaTime.getElapsedTime(),
        width,
        height
    );
    playerStats.addStatsFor(
        roundName,
        playerTwo.id,
        squadrons[1],
        game.rank,
        playerTwoWld,
        6 - squadrons[0]?.kills,
        deltaTime.getElapsedTime(),
        width,
        height
    );
    scoreManager.reset();
    await playerStats.writeRoundRobin('./stats');
    await startNextRound();
};

const animate = async() => {
    deltaTime.update();
    pm.update();
    dm.update();
    if(squadrons[0]?.health <= 0 && squadrons[1]?.health <= 0) {
        await endRound(0, 0);
        return;
    } else if(squadrons[1]?.health <= 0 && squadrons[0]?.health > 0) {
        await endRound(1, -1);
        return;
    } else if(squadrons[0]?.health <= 0 && squadrons[1]?.health > 0) {
        await endRound(-1, 1);
        return;
    }
    deltaTime.spoofTimePassing(Math.random() * 14 + 6);
    requestAnimationFrame(animate);
};

await start();
