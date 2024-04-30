import usuarioModel from "../Schemas/usuario.model";
import {UsuarioType} from "../Types/usuario.type";

class UsuarioService {
    async create (usuario:UsuarioType) {
        const createdUsuario = await usuarioModel.create(usuario);
        return createdUsuario
    }

    async findAll(){
        const findedUsuarios = await usuarioModel.find();
        return findedUsuarios;
    }

    async findById(id: String){
        const findedUsuario = await usuarioModel.findById(id);
        return findedUsuario;
    }

    async update(id: String, usuario: UsuarioType) {
        const updateUsuario = await usuarioModel.findByIdAndUpdate(id, {
            id: String,
            name: String,
        }, {new:true}); return updateUsuario;
    }

    async delete(id: String) {
        const deleteUsuario = await usuarioModel.findByIdAndDelete(id);
        return deleteUsuario;
    }
}

export default new UsuarioService();