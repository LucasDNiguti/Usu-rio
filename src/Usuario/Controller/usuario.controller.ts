import usuarioService from '../Services/usuario.service';
import {Request,Response} from 'express';

class UsuarioController {
    async create(req:Request, res:Response) {
        const createdUsuario = await usuarioService.create(req.body)
        res.status(201);
        return res.json(createdUsuario)
    }

    async findAll(res:Response){
        const findedUsuarios = await usuarioService.findAll()
        return res.json(findedUsuarios)
    }

    async findById(req:Request,res:Response){
        const findedUsuario = await usuarioService.findById(req.params.id)
        return res.json(findedUsuario)
    }

    async update(req:Request,res:Response){
        const updateUsuario = await usuarioService.update(req.params.id, req.body)
        return res.json(updateUsuario)
    }

    async delete(req:Request,res:Response){
        const deleteUsuario = await usuarioService.delete(req.params.id)
        return res.json(deleteUsuario)
    }
}

export default new UsuarioController();
