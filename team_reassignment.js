async function teamReassignment(teams, seed) {
  let index = Math.floor(Math.random() * teams);
  if (!isNaN(seed)) {
    index = teams > seed ? teams % seed : seed % teams;
  }

  let new_teams = []
  for (let i = 0; i < teams; i++) {
    new_teams.push([i]);
  }
  let players = [];
  await loadData('data/level_a_players.csv').then(
    (rows) => {
      players = rows
    });

  players.sort((a, b) => parseInt(b.current_total_points) - parseInt(a.current_total_points));
  for (let i = 0; i < players.length; i++) {
    new_teams[index].push(players[i]);
    index = index + 1;
    if (index >= new_teams.length) {
      index = 0;
    }
  }
  printOutput(new_teams);
}

async function loadData(filePath) {
  const fs = require('fs');
  const csv = require('csv-parser');
  let rows = [];
  
  return new Promise(resolve => {
    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
          rows.push(row)
        })
        .on('end', () => {
          resolve(rows)
        });
  });
}

function printOutput(teams) {
  current_total_points = []
  for (let i = 0; i < teams.length; i++) {
    current_total_points.push(0);
  }
  for (let i = 0; i < teams.length; i++) {
    for (let j = 0; j < teams[i].length; j++) {
      if (teams[i][j].player_id !== undefined) {
        current_total_points[i] = current_total_points[i] + parseInt(teams[i][j].current_total_points);
        console.log(`${teams[i][j].player_id} -> TEAM ${i}`)
      }
    }
  }
  for (let i = 0; i < current_total_points.length; i++) {
    console.log(`TEAM ${i}, SIZE: ${teams[i].length}, TOTAL POINTS: ${current_total_points[i]}`)
  }
  console.log("The players were distributed into the groups in such a way that the current total points are more or less even.")
}

module.exports = {
  teamReassignment
};
