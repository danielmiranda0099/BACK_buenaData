const express = require('express');
const router = express.Router();
const { User:UserController } = require('../controllers')

const userController = new UserController();

router.get('/', userController.listar);
router.get('/:id', userController.listarById);
router.post('/', userController.crear);
router.patch('/:id', userController.actualizar);
router.delete('/', userController.eliminar);

module.exports = router;