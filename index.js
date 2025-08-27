const { teamReassignment } = require('./team_reassignment');

let teams = -1;
let seed = -1;

process.argv.forEach((val, index) => {
  if (val == '--teams') {
    teams = process.argv[index + 1];
  }
  if (val == '--seed') {
    seed = process.argv[index + 1];
  } 
});

if (teams == -1) {
  console.log("No TEMAS or SEED parameters were provided.");
  return;
}
teamReassignment(teams, seed);
