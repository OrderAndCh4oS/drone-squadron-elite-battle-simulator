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

    const squadronsTournament = await getDataFromCsv('swiss_elimination_squadrons-stats_1600x900.csv', parserOptions);
    const dronesTournament = await getDataFromCsv('swiss_elimination_drones-stats_1600x900.csv', parserOptions);

    const sortedSquadronsTournament = squadronsTournament.sort(
        (a, b) => b.survivingDrones - a.survivingDrones,
    );
    const sortedDronesTournament = dronesTournament.sort(
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

    writeWorkSheet(wb, sortedSquadronsTournament, 'squadrons_tournament');
    writeWorkSheet(wb, sortedDronesTournament, 'drones_tournament');

    wb.write(`tournament-stats_${(new Date()).toISOString().slice(0, 10)}.xlsx`);
}

await writeExcel();
