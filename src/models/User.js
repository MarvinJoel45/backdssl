class User {

    static tableName = 'usuario';

    constructor(id, nombre, correo){
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
    }
}

module.exports = User;