const {User:userModel} = require("../models");

class userController {
    constructor() {
        this.listar = this.listar.bind(this);
        this.listarById = this.listarById.bind(this);
        this.crear = this.crear.bind(this);
        this.actualizar = this.actualizar.bind(this);
        this.eliminar = this.eliminar.bind(this);
    }

    async listar(req, res) {
        try {
            const users = await userModel.findAll(); 
            res.status(200).json(users);
        } catch (error) {
            console.log(error);
            res.status(400).send({message:"error en listar", error})
        }
    }

    async listarById(req, res) {
        try {
            const {id} = req.params;
            console.log("******numero ID ******",id)
            const user = await userModel.findByPk(id);
            if(user === null){
                res.status(404).json({message:"El Usuario no existe"})
            }else{
                res.status(200).json(user);
            }
        } catch (error) {
            console.log(error);
            res.status(400).send({message:"ERROR INTERNO --> ListarById() user.controller", error})
        }
    }

    async crear(req, res) {
        try {
            const {nombre, apellido, fechaNacimiento, numeroId} = req.body;
            const newUser = {nombre, apellido, fechaNacimiento, numeroId};
            const resNewUser = await userModel.create(newUser);
            console.log(resNewUser);
            res.status(200).json({message:'Usuario creado', newUser});
        } catch (error) {
            console.log(error);
            res.status(500).json({message:'ERROR INTERNO --> crear() user.controller', error});
        }
    }

    async actualizar(req, res) {
        try {
            const {id} = req.params;
            const {nombre, apellido} = req.body;

            const userUpdated = await userModel.update(
                {nombre, apellido}, 
                {returning: true,where: {numeroId:id}}
            )
            console.log("******numero Updating ******",userUpdated);
            res.status(200).json({message:'Usuario actualizado', userUpdated});
        } catch (error) {
            console.log(error);
            res.status(500).json({message:'ERROR INTERNO --> actualizar() user.controller', error});
        }
    }

    async eliminar(req, res) {
        try {
            const {numeroId} = req.body;
            const userDeleted = await userModel.destroy({
                returning: true,
                where: {
                    numeroId
                }
            })
            console.log(userDeleted);
            res.status(200).json({message:'Usuario eliminado', userDeleted});
        } catch (error) {
            console.log(error);
            res.status(500).json({message:'ERROR INTERNO --> eliminar() user.controller', error});
        }
    }
}

module.exports = userController;