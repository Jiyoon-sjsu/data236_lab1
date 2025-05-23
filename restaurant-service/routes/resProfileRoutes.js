const express = require('express');
const router = express.Router();
const resProfileCtrl = require('../controllers/resProfileCtrl');

router.get('/restaurants/:id/profile', resProfileCtrl.viewRestInfo);
router.get('/restaurants/profile/me', resProfileCtrl.viewMyRestInfo);
router.put('/restaurants/:id/profile', resProfileCtrl.updateRestInfo);

module.exports = router;