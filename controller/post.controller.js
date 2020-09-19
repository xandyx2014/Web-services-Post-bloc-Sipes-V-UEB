const { Post } = require('../models/');

// llamar a todos
async function index(req, res) {
    // LLAMAR A TODOS LOS USUARIOS DE LA TABLA
    // Select * from '' 2ms 3ms 5ms 1s 5s
    const { id } = req.params;
    // SELECT * FROM  mysql
    // FROM '' SELECT sqlServer
    const posts = await Post.findAll({
        where: {
            user_id: id
        }
    });
    return res.status(200).json(posts);
}
// llamar a uno
async function show(req, res) {
    const { id } = req.params;
    const posts = await Post.findByPk(id);
    return res.status(200).json(posts);
}
// eliminar 
async function destroy(req, res) {
    const  { id } = req.params;
    const post = await Post.destroy({
        where: {
            id: id
        },
    });
    return res.status(200).json(post);
}
// crear
async function store(req, res) {
    const {titulo, body, user_id} = req.body;
    const post = await Post.create({titulo, body, user_id});
    return res.status(200).json(post);
}

module.exports = {
    index,
    show,
    destroy,
    store
}

