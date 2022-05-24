const router = require('express').Router();
const {createUser, updateUser, deleteUser, getAllUsers, getUserById} = require('../../controllers/user-controller')
router.route("/").post(createUser).get(getAllUsers);
router.route("/:userId").delete(deleteUser).put(updateUser).get(getUserById)

module.exports = router;