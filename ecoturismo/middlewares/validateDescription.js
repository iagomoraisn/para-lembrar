module.exports = (res, req, next) => {
const { description } = req.body;
if (!description) {
    return res.status(400).json(
        { message: 'O campo description é obrigatorio' },
    );
}

if (!description.createdAt) {
    return res.status(400).json(
        { message: 'O campo createdAt é obrigatorio' },
    );
}

if (!description.rating) {
    return res.status(400).json(
        { message: 'O campo rating é obrigatorio' },
    );
}

if (!description.difficulty) {
    return res.status(400).json(
        { message: 'O campo difficulty é obrigatorio' },
    );
}

next();
}; //parte 7