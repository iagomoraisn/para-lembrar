const validateTeam = (req, res, next) => {
    const requireProperties = ['nome', 'sigla'];
    if (requireProperties.every((property) => property in req.body)) {
        next();
    } else {
        res.sendStatus(400);
    }
};

module.exports = validateTeam;