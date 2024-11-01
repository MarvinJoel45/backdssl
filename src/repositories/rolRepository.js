const CrudRepository = require('../lib/crudRepository');
const Rol = require('../models/Rol');

class RolRepository extends CrudRepository {

    constructor(){
        super(Rol);
    }

    async findUsersByIdRol(rolId) {
        const [rows] = await this.pool.query(`
            SELECT * FROM roles r inner join usuario u on
            r.id=u.idRol where r.id = ?`, [rolId]);

        return rows;
    }
}

module.exports = new RolRepository();