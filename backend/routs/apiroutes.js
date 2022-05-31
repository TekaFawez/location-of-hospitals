// Fawez TEKA 
//     https://www.linkedin.com/in/fawez-teka/
//     https://github.com/TekaFawez
//    Copyright © Fawez TEKA . All rights reserved.
const express = require('express');
const router = express.Router();

const hopital = require('../controllers/hopital');
const users = require('../controllers/users');
const admin = require('../controllers/admin');

router.post('/register', users.create);
router.post('/authenticatea', users.authenticate);
router.post('/authenticate', admin.authenticate);




router.get('/hopital', hopital.getHopital);

router.post('/post-hopital', hopital.postHopital);


router.get('/gethopital/:id', hopital.showHopital);

router.put('/updatehopital/:id', hopital.updateHopital);
router.delete('/deletehopital/:id', hopital.deleteHopital);

module.exports = router;