const router = require('express').Router();
const partnerController = require('../controllers/partnerController')

router.get('/', partnerController.getAllPartners)
router.get('/:type', partnerController.getPartnersByType)

module.exports = router;