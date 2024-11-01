class Rol {

    static tableName = 'roles';

    constructor(id, nombre, descripcion){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}
module.exports = Rol;