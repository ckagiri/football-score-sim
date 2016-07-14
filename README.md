# Football Score Simulator

A simple package which generates realistic
football (soccer) scores. It does this using
normal distribution and the given elo ratings.

## Installation

`npm install --save football-score-sim`

## Example
```
var football = require('football-score-sim');
var Team = football.Team;
var Match = football.Match;


var derby = new Team('Derby County', 1544);
var united = new Team('Manchester United', 1794);

var match = new Match(derby, united, {
    extraTime: true,
    penalties: true,
    seed: 'example'
});

match.simulate();

console.log(match.text);
```
output:
`Derby County 1-2 Manchester United`

## Author

Jordan Lord

## License

This project is licensed under the MIT license
