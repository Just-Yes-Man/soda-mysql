const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'));

router.post('/soda', controllers.createRefresco);
router.get('/soda', controllers.getAllRefrescos);

module.exports = router;

