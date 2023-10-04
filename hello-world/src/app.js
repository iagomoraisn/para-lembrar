const validateTeam = require('./middlewares/validateTeam');

const existingId = (req, res, next) => {
    const id = Number(req.params.id);
    
    if (teams.some((t) => t.id === id)) {
        next();
    } else {

    res.sendStatus(404);
    }
};

app.get("/teams/:id", existingId, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find(t => t.id === id);
    res.json(team);
});

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find(t => t.id === id);
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
});

app.delete('/teams/:id', existingId, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find(t => t.id === id);
    const index = teams.indexOf(team);
    teams.splice(index, 1);
    res.sendStatus(204);
});