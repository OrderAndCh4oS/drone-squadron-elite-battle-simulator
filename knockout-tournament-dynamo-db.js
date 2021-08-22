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
import { fetchPlayerSquadron } from './api/get-drones.js';
import TournamentOrganizer from 'tournament-organizer';
import Stats from './stats.js';
import SquadronFactory from './factory/squadron-factory.js';
import { deltaTime } from './service/delta-time.js';
import ObjectsToCsv from 'objects-to-csv';
import path from 'path';
import fs from 'fs';
import { shuffle } from './functions.js';
import pad from './helpers.js';
import playerSquadrons from './constants/player-squadrons.js';

const playerStats = new Stats();

const playGame = (playerOne, playerTwo) =>
    new Promise(async(resolve) => {
        const requestAnimationFrame = f => {
            setImmediate(f);
        };

        const setupDrones = async() => {
            squadrons.splice(0, squadrons.length);
            [
                {
                    id: 1, name: playerOne.leader,
                    drones: playerOne.drones.map((d, i) => ({id: i, ...d})),
                },
                {
                    id: 2, name: playerTwo.leader,
                    drones: playerTwo.drones.map(
                        (d, i) => ({id: i + playerOne.drones.length + 1, ...d})),
                },
            ].map(s => squadrons.push(SquadronFactory.make(s)));
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

        const endRound = async(playerOneWld, playerTwoWld) => {
            console.log(playerOneWld, playerTwoWld);
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
                height,
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
                height,
            );
            scoreManager.reset();
            resolve({playerOneWld, playerTwoWld});
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

        await initialiseRound();
        deltaTime.reset();
        requestAnimationFrame(animate);
    });

async function getPlayers() {
    const players = await Promise.all(Array(playerSquadrons.length).fill().map((_, i) => fetchPlayerSquadron(i)));
    return shuffle(players.map((p, i) => ({...p, id: i})));
}

const players = await getPlayers();
const manager = new TournamentOrganizer.EventManager();

const tourney = manager.createTournament(null, {
    name: 'Drone Squadron Swiss Elimination',
    format: 'swiss',
    playoffs: 'elim',
    cutLimit: 16,
    bestOf: 3,
    winValue: 3,
    drawValue: 1,
    tiebreakers: ['magic-tcg'],
});

for(const player of players) {
    tourney.addPlayer(player.leader);
}

tourney.startEvent();

while(tourney.activeMatches().length) {
    const match = tourney.activeMatches()[0];
    console.log('Round:', match.round);
    console.log('Match No.:', match.matchNumber);
    console.log(`${match.playerOne.alias} vs ${match.playerTwo.alias}`);
    let oneWins = 0;
    let twoWins = 0;
    let draws = 0;
    const playerOne = players.find(p => p.leader === match.playerOne.alias);
    const playerTwo = players.find(p => p.leader === match.playerTwo.alias);
    for(let i = 0; i < 3; i++) {
        const result = await playGame(playerOne, playerTwo);
        if(result.playerOneWld === 1 && result.playerTwoWld === -1) {
            oneWins++;
        } else if(result.playerTwoWld === 1 && result.playerOneWld === -1) {
            twoWins++;
        } else if(result.playerOneWld === 0 && result.playerTwoWld === 0) {
            draws++;
        }
    }
    tourney.result(match, oneWins, twoWins, draws);
}

let playerData = [];
for(const player of tourney.players) {
    const wld = player.results.map(r => r.result).join(',');
    const opponents = player.results
        .map(r => tourney.players.find(p => p.id === r.opponent).alias)
        .join(',');
    const squadronData = players.find(p => p.leader === player.alias);
    playerData.push({
        number: `#${pad(squadronData.id + 1, 4)}`,
        squadron: player.alias,
        wld,
        matches: player.matches,
        matchPoints: player.matchPoints,
        games: player.games,
        gamePoints: player.gamePoints,
        initialByes: player.initialByes,
        byes: player.byes,
        matchWinPercentageMTG: player.tiebreakers.matchWinPctM.toPrecision(3),
        gameWinPercentage: player.tiebreakers.gameWinPct.toPrecision(3),
        opponents,
    });
}

const matchData = [];
for(const match of tourney.matches) {
    const playerOneSquadronData = players.find(p => p.leader === match.playerOne.alias);
    const playerTwoSquadronData = match.playerTwo?.alias
        ? players.find(p => p.leader === match.playerTwo.alias)
        : null;
    matchData.push({
        playerOneNumber: `#${pad(playerOneSquadronData.id + 1, 4)}`,
        playerOne: match.playerOne.alias,
        playerTwoNumber: playerTwoSquadronData ? `#${pad(playerTwoSquadronData.id + 1, 4)}` : 'Bye',
        playerTwo: match.playerTwo?.alias || 'Bye',
        round: match.round,
        playerOneWins: match.playerOneWins,
        playerTwoWins: match.playerTwoWins,
        draws: match.draws,
    });
}

await playerStats.writeSwissElimination('./stats');

const today = (new Date()).toISOString().slice(0, 10);

await new ObjectsToCsv(playerData).toDisk(
    path.join('./stats', `swiss_elimination_results_${width}x${height}_${today}.csv`),
    {append: false},
);

await new ObjectsToCsv(matchData).toDisk(
    path.join('./stats', `swiss_elimination_matches_${width}x${height}_${today}.csv`),
    {append: false},
);

fs.writeFileSync(path.join(
    './stats',
    `swiss_elimination_results_${width}x${height}_${today}.json`,
), JSON.stringify(playerData));

fs.writeFileSync(path.join(
    './stats',
    `swiss_elimination_matches_${width}x${height}_${today}.json`,
), JSON.stringify(matchData));
