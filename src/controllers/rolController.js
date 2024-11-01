const express = require('express');
const rolService = require('../services/rolService');
const router = express.Router();

router.get('/listar', async(req, res) => {
    const roles = await rolService.getAllRoles();
    res.json(roles);
});

router.get('/:id', async(req,res) => {
    const rol = await rolService.getRolById(req.params.id);

    if(rol){
        res.json(rol);
    }else{
        res.status(404).json({message: 'Rol not found'});
    }
});

router.get('/users/:rolId', async(req,res) => {

    try {
        const result = await rolService.getUsersByRole(req.params.rolId);

        res.json(result);
    } catch (error) {
        if (error.message === 'Role not found') {
            res.status(404).json({error: error.message});
        } else {
            res.status(500).json({error: error.message});
        }
    }
});

router.post('/', async(req,res) => {
    const newRol = await rolService.createRol(req.body);
    if(newRol){
        res.status(201).json(newRol);
    } else{
        res.status(404).json({message: 'Rol not created'});
    }
});

router.put('/:id', async(req,res) => {
    const updateRol = await rolService.updateRol(req.params.id,req.body);
    if(updateRol){
        res.status(201).json(updateRol);
    } else{
        res.status(404).json({message: 'Rol not updated'});
    }
});

router.delete('/:id', async(req,res) => {

    const deleteRol = await rolService.deleteRol(req.params.id);

    if (deleteRol) {
        res.status(204).send();
    } else {
        res.status(404).json({message: 'Rol not deleted'});
    }
});

module.exports = router;