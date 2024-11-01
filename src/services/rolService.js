const rolRepository = require('../repositories/rolRepository');
const userRepository = require('../repositories/userRepository');

class RolService {

    getAllRoles(){
        return rolRepository.findAll();
    }

    getRolById(id){
        return rolRepository.findById(id);
    }

    createRol(rolData){
        return rolRepository.create(rolData);
    }

    updateRol(id, rolData){
        return rolRepository.update(id, rolData);
    }

    deleteRol(id){
        return rolRepository.delete(id);
    }

    async getUsersByRole(rolId) {
        const rol = await rolRepository.findById(rolId);

        if (!rol) {
            throw new Error('Rol not Found');
        }

        const users = await rolRepository.findUsersByIdRol(rolId);

        const usersByRol = {
            data: {
                ...rol,
                usuarios: users
            }
        }

        return usersByRol;
    }

}
module.exports = new RolService();