const express = require('express');
const app = express();
// ESTAMOS LLAMANDO A LAS FUNCIONES DESDE OTRO ARCHIVO
const userController = require('./controller/user.controller');
const postController = require('./controller/post.controller');
// DECLARAMOS QUE EXPRESS UTILIZE JSON Y LEA LOS DATOS
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// ===================
// USER ROUTE
// ===================
app.get('/user', userController.index);
app.get('/user/:id', userController.show);
app.post('/user', userController.store);
app.delete('/user/:id', userController.destroy);
// ===================
// USER POST ROUTE
// ===================
app.get('/user/:id/post', postController.index);
app.post('/user/post', postController.store);
// LEVANTAMOS EL SERVIDOR QUE ESTARA A LA ESCUCHA 
app.listen(3000, () => {
    console.log('SERVER LISTO EN PUERTO 3000');
});