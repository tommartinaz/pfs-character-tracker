const alignments = require('../controllers/alignments');
const characters = require('../controllers/characters');
const players = require('../controllers/players');
const classes = require('../controllers/classes');
const races = require('../controllers/races');
const scenarios = require('../controllers/scenarios');
// const locations = require('../controllers/locations');
// const projects = require('../controllers/projects');


module.exports = (app) => {

    // Alignments
    app.get('/api/alignments', alignments.getAlignments);

    // Characters
    app.get('/api/characters', characters.getAllCharacters);
    app.post('/api/characters', characters.addCharacter);
    app.get('/api/characters/:id', characters.getOneCharacter);
    app.patch('/api/characters/:id', characters.updateCharacter);
    app.delete('/api/characters/:id', characters.deleteCharacter);
 
    // Classes
    app.get('/api/classes', classes.getAllClasses);
    app.post('/api/classes', classes.addClass);
    app.get('/api/classes/:id', classes.getOneClass);
    app.patch('/api/classes/:id', classes.updateClass);
    app.delete('/api/classes/:id', classes.deleteClass);
    
    // Players
    app.get('/api/players', players.getAllPlayers);
    app.post('/api/players', players.addPlayer);
    app.get('/api/players/:id', players.getOnePlayer);
    app.patch('/api/players/:id', players.updatePlayer);
    app.delete('/api/players/:id', players.deletePlayer);

    // Races
    app.get('/api/races', races.getAllRaces);
    app.post('/api/races', races.addRace);
    app.get('/api/races/:id', races.getOneRace);
    app.patch('/api/races/:id', races.updateRace);
    app.delete('/api/races/:id', races.deleteRace);

    // Scenarios
    app.get('/api/scenarios', scenarios.getAllScenarios);
}