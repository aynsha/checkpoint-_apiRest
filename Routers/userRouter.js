const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');

// Route POST pour créer un nouvel utilisateur
router.post('/user', userController.addUser)

//Route pour poster plusieurs utilisateurs
router.post('/users', userController.arrayOfPeople)

//Route pour afficher tous les utilisateurs de la BD
router.get('/users', userController.getUsers)

//Route pour modifier un utilisateur
router.put('/users:userId', userController.updateUser)

//Route pour supprimer un utilisateur
router.delete('/users:userId', userController.deleteUser)
module.exports= router;


