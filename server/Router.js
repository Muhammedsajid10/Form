const express = require('express');
const formCreate = require('./Controller/createForm');
const router = express.Router();

router.route('/').post(formCreate);

module.exports = router;
