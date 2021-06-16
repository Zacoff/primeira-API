const {Router} = require('express');
const TestController = require('../controllers/TestControllers');

const router = Router();

router.get('/testando' , TestController.selectAll);

router.get('/testando/:id', TestController.selectOne);

module.exports = router;