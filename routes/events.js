
const { Router } = require("express");
const { check } = require('express-validator');
const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const {getEventos, crearEvento, actualizarEvento, eliminarEvento}= require('../controllers/events');
//obtener eventos

const router = Router(); 

//realizar validacion del jwt
router.use(validarJWT);

//Obtener eventos
router.get('/', getEventos);

//Crear un nuevo evento
router.post(
    '/',
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom(isDate),
        check('end','Fecha de finalizacion es obligatoria').custom(isDate),
        validarCampos,
    ],
     crearEvento);

//actualizar evento
router.put('/:id', actualizarEvento);


//Borrar evento

router.delete('/:id',eliminarEvento);

module.exports = router;