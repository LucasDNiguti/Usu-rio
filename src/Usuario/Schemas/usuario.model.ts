import {Schema, model} from 'mongoose'

const usuarioSchema = new Schema({
    id: String,
    name: String
}, {timestamps: true});

export default model("Usuario", usuarioSchema)