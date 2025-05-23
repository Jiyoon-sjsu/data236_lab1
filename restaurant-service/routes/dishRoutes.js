const express = require('express');
const router = express.Router();
const dishCtrl = require('../controllers/dishCtrl');

router.post('/create', dishCtrl.createDish);
router.get('/get/:id', dishCtrl.getOneDish);

router.post('/update/:id', dishCtrl.updateDish);
router.delete('/delete/:id', dishCtrl.deleteDish);

module.exports = router;
