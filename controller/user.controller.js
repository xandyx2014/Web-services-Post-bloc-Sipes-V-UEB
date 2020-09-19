const { User } = require('../models/');

// llamar a todos
async function index(req, res) {
    // LLAMAR A TODOS LOS USUARIOS DE LA TABLA
    // Select * from '' 2ms 3ms 5ms 1s 5s
    const users = await User.findAll();
    return res.status(200).json(users);
}
// llamar a uno
async function show(req, res) {
    const { id } = req.params;
    const users = await User.findByPk(id);
    return res.status(200).json(users);
}
async function update(req, res) {
    const {nombre, apellido} = req.body;
    const user = await User.update({apellido, nombre}, {
        where: {
            id: id
        }
    });
}
// eliminar 
async function destroy(req, res) {
    const  { id } = req.params;
    const user = await User.destroy({
        where: {
            id: id
        },
    });
    return res.status(200).json(user);
}
// crear
async function store(req, res) {
    const {nombre, apellido} = req.body;
    const user = await User.create({nombre, apellido});
    return res.status(200).json(user);
}

module.exports = {
    index,
    show,
    destroy,
    store
}

