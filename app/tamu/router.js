const router = require('express').Router();
const tamuController = require('./controller');

router.get('/tamu', tamuController.index);
router.get('/tamu/:id', tamuController.findOne);
router.post('/tamu', tamuController.store);
router.put('/tamu/:id', tamuController.update);
router.delete('/tamu/:id', tamuController.destroy);

module.exports = router;