var express = require('express');
const ProcessController = require('../controllers/processes');
var router = express.Router();

/* GET processes listing. */
router.get('/processes', ProcessController.getAllProcesses);

/* GET a single process. */
router.post('/processes', ProcessController.getProcessByForum);

/* GET forum listing */
router.get('/forums',ProcessController.getAllForuns);

module.exports = router;
