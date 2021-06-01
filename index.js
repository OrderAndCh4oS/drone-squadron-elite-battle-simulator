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
import enemyQueue from './data/enemy-drones/enemy-queue.js';
import { promises as fs } from 'fs';
import ShortUniqueId from 'short-unique-id';
import Stats from './stats.js';
const uid = new ShortUniqueId();

const playerSquadrons = [
    '10_squadron_onzFVkvDf5feHKrvY1fwga3vr9YTAcUdb2aJYwuHfuGCRnZiRBH.json',
    '11_squadron_oomLi3xMVkV3ZpZBQHwoK1yN2ayBuRpQRsLU7Y98sXukQ89QKD6.json',
    '3_squadron_opW8eZwer244UHaYBtPNEWz6LLNfrpyjZNcu9GTJMHuHqEb7SL1.json',
    '12_squadron_op7CfeSWtZvHut2H33D18TRkxJXywSiGRYPeHBUTc8pwoJUpipM.json',
    '2_squadron_ooa8PHz6zA8toZ4FBac7H972oupjbSpq8SQGFTaMuDL3dXQb2q7.json',
    '6_squadron_oobGxJDksDQZqGkcHcVRajzmAu8DDoEix7i2fXBchdAAh5XAdsp.json',
    '5_squadron_opaWJPFcyqQUpk2JdUaG3ry8C5gkJHMo97PSS6tZFk9Skrcidfg.json',
    '1_squadron_ooU8CrAGL3ASBUMaAhfB3R9a5T3m4V6TEVVDzmiYoMmCGXwvhJo.json',
    '7_squadron_opCby8nsd2jxF3SFrjVMUfdenNMP3dVEF1mvLvi3rCr5saUErNp.json',
    '9_squadron_oo3o7GRmekzo153w2zLN9TyMZsTUJEiBrwkKuNE2em85f6unFEP.json',
    '4_squadron_oneZnunCguSKwZMeN7TKmvsxQ1ZzyeHojuiQsSJycFnfEkrWbuj.json',
    '8_squadron_opD9PnSLY9b5Eqe1r5cNAFVGA3Xt1FXviQArnZ3Z7AzN9qdrFoV.json',
    '13_squadron_onktvWNLMWiTYsDtAze9z2NzGoTRuu98homJGvLgceygE14TLqG.json',
    '15_squadron_ooE6Te1Cuh9Q9NPv4W5aJURRcWoNYjf9JUNDvVKLw8s8nJRakoK_2.json',
    '14_squadron_ooE6Te1Cuh9Q9NPv4W5aJURRcWoNYjf9JUNDvVKLw8s8nJRakoK.json',
    '16_squadron_onhzEL2sG9hWM5y1YhMQroSicBWiMSqFsD76MtTRiqeq283JyLZ.json',
    '18_squadron_opFcVfcjDULwYFXyF6f5fDq5jtuhw4vz2bNYn9EEhJ9h5SaNgNt.json',
    '17_squadron_oowZsif3iKoLjRrrcBRShhbb7YusonukjSKA3n5EMaJNrrVSc2v.json',
    '19_squadron_onoYGs95ASAShzKK4Gg2fr2RZrton1dU2a1qHB84ajwXGCX1tEP.json',
    '20_squadron_onnuFbYfVE8V8rrpJA6dsnNVNx5khtpGSH9AG65PZJQELa1HSKY.json',
    '21_squadron_ooBfZ7jw2GBy9tLn7LgJSR4aDJzBK6gRSD1TFm7uSaB3HzfT6ck.json',
    '22_squadron_onkaoQYDQbCTyXsPZn6inqEvuG9CGCkgcpRTPXmzEsTT7KzgUdZ.json',
    '23_squadron_oo1xZYiujpCp11QpiTeoP9u1qmNesJEkSsQrDu6QWKe4n4GJDQh.json',
    '24_squadron_opCYMAzpWkYsNCzGHeDfSRzeyyctFNCqNzTUkJiLEtNGqyJHgdH.json',
    '25_squadron_op7i9ffN57Y73WpbpsoFUkNYn9V95VQCBd3WL76gxREArAnhFfH.json',
    '26_squadron_ooucvC42egb4B3UjoUUmVJvssbcUfpzwwKXU7c9VxfBrh4KTTL9.json',
];

let currentPlayer = 0;
const stats = new Stats();
let roundUid = uid();
let totalRuns = 5;
let runs = 0;

const next = async () => {
    game.state = 'stopped';
    game.rank = 0;
    runs = 0;
    scoreManager.reset();
    currentPlayer++;
    if(currentPlayer < playerSquadrons.length) {
        await play()
    }
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

const fetchEnemySquadron = async rank => {
    const enemy = enemyQueue[rank];
    const enemySquadronData = await fs.readFile(
        `./data/enemy-drones/${enemy.id}_${enemy.seed}/squadron.json`, 'utf-8');
    return JSON.parse(enemySquadronData);
};

const fetchPlayerSquadron = async() => {
    const playerSquadronData = await fs.readFile(`./data/player-drones/${playerSquadrons[currentPlayer]}`);
    return JSON.parse(playerSquadronData);
};

const setupDrones = async() => {
    squadrons.splice(0, squadrons.length);
    const enemy = await fetchEnemySquadron(game.rank);
    const player = await fetchPlayerSquadron();
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

const requestAnimationFrame = f => {
    setImmediate(f);
};

const play = async() => {
    await initialiseRound();
    deltaTime.reset();
    requestAnimationFrame(animate);
};

const endRound = async(isDraw = false) => {
    console.log('High Score:', scoreManager.playerOneScore);
    stats.addStatsFor(roundUid, squadrons[0], game.rank, isDraw ? 0 : -1, 6 - squadrons[1]?.kills, deltaTime.getElapsedTime(), width, height);
    stats.addHighScore(roundUid, squadrons[0], scoreManager.playerOneScore, game.rank, width, height);
    game.rank = 0;
    runs++;
    roundUid = uid();
    if(runs < totalRuns) {
        await play();
    } else {
        await stats.write('./stats', false)
        await next();
    }
};

const animate = async() => {
    deltaTime.update();
    pm.update();
    dm.update();
    if(squadrons[0]?.health > 0 && squadrons[1]?.health <= 0) {
        console.log('Cleared rank ' + (game.rank + 1));
        console.log(scoreManager.playerOneScore);
        stats.addStatsFor(roundUid, squadrons[0], game.rank, 1, 6 - squadrons[1]?.kills, deltaTime.getElapsedTime(), width, height);
        game.rank++;
        await play();
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

await play();
