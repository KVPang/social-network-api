const router = require('express').Router();
const {createUser} = require('../../controllers/user-controller')
router.route('/').post(createUser).get(getAllUsers)


module.exports = router;