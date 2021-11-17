const router = require('express').Router();
const partnerRouter = require('./partnerRouter');

router.use('/', partnerRouter)

module.exports = router;