const router = require('express').Router();
const sellController = require('../controller/sellController')

router.post('/getSellByUserID', sellController.getSellByUserIDCtrl);
router.post('/getSellInfoByBuyerID', sellController.getSellInfoByBuyerIDCtrl)
router.post('/getSellInfo', sellController.getSellInfoCtrl)

module.exports = router;