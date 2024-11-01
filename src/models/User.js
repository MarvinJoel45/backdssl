class User {

    static tableName = 'usuario';

    constructor(id, nombre, correo, idRol){
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.idRol = idRol;
    }
}

module.exports = User;