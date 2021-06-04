import * as excel from 'excel4node';
import parse from 'csv-parse/lib/sync.js';
import fs from 'fs';
import path from 'path';

async function writeExcel() {
    const wb = new excel.Workbook;

    const stats = './stats';

    console.log('Parsing input');

    const parserOptions = {
        skip_empty_lines: true,
        trim: true,
        bom: true,
        columns: true,
        cast: true,
    };

    async function getDataFromCsv(file, options) {

        const csv = fs.readFileSync(path.join(stats, file), 'utf8');
        return await parse(csv, options);
    }

    const highScores1280x720 = await getDataFromCsv('high-scores_1280x720.csv', parserOptions);
    const highScores800x800 = await getDataFromCsv('high-scores_800x800.csv', parserOptions);

    const squadron1280x720 = await getDataFromCsv('squadrons-stats_1280x720.csv', parserOptions);
    const squadron800x800 = await getDataFromCsv('squadrons-stats_800x800.csv', parserOptions);

    const drone1280x720 = await getDataFromCsv('drones-stats_1280x720.csv', parserOptions);
    const drone800x800 = await getDataFromCsv('drones-stats_800x800.csv', parserOptions);

    const sortedHighScores1280x720 = highScores1280x720.sort(
        (a, b) => b.highScore - a.highScore,
    );
    const sortedHighScores800x800 = highScores800x800.sort(
        (a, b) => b.highScore - a.highScore,
    );
    const sortedSquadron1280x720 = squadron1280x720.sort(
        (a, b) => b.survivingDrones - a.survivingDrones,
    );
    const sortedSquadron800x800 = squadron800x800.sort(
        (a, b) => b.survivingDrones - a.survivingDrones,
    );
    const sortedDrone1280x720 = drone1280x720.sort(
        (a, b) => b.damage - a.damage,
    );
    const sortedDrone800x800 = drone800x800.sort(
        (a, b) => b.damage - a.damage,
    );

    const writeWorkSheet = (wb, rows, name) => {
        const ws = wb.addWorksheet(name, {});
        for(let i = 0; i < Object.keys(rows[0]).length; i++) {
            let title = Object.keys(rows[0])[i];
            ws.cell(1, i + 1).string(title);
        }
        for(let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
            const row = rows[rowIndex];
            const cells = Object.entries(row);
            for(let colIndex = 0; colIndex < Object.keys(row).length; colIndex++) {
                const cell = cells[colIndex][1];
                switch(typeof cell) {
                    case 'number':
                        ws.cell(rowIndex + 2, colIndex + 1).number(cell);
                        break;
                    case 'string':
                        ws.cell(rowIndex + 2, colIndex + 1).string(cell);
                        break;
                }
            }
        }
    };

    writeWorkSheet(wb, sortedHighScores1280x720, 'high-scores_1280x720');
    writeWorkSheet(wb, sortedHighScores800x800, 'high-scores_800x800');
    writeWorkSheet(wb, sortedSquadron1280x720, 'squadrons_1280x720');
    writeWorkSheet(wb, sortedSquadron800x800, 'squadrons_800x800');
    writeWorkSheet(wb, sortedDrone1280x720, 'drones_1280x720');
    writeWorkSheet(wb, sortedDrone800x800, 'drones_800x800');

    wb.write(`stats_${(new Date()).toISOString().slice(0, 10)}.xlsx`);
}

await writeExcel();
