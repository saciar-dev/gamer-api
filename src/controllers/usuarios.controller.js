import {pool} from '../db.js';

export const getUsuarios = async (req, res) => {
    const result = await pool.query('select * from usuarios');
    res.json(result);
}

export const getUsuarioByEmailyPass = async (req,res) => {
    const [rows] = await pool.query("select * from usuarios where email = ? and password = ?",[req.params.email])
}

export const createUsuario = async (req, res) => {
    
    const {nombre, apellido, email, password} = req.body;
    const [result] = await pool.query('insert into usuarios (nombre, apellido, email, password) values (?,?,?,?)', [nombre, apellido, email, password]) 
    res.send({result});
}

export const updateUsuario = (req, res) => {
    res.send("actualizando usuario");
}