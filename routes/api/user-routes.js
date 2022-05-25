const router = require('express').Router();
const {createUser, updateUser, deleteUser, getAllUsers, getUserById, addFriend, deleteFriend} = require('../../controllers/user-controller')
router.route("/").get(getAllUsers).post(createUser);
router.route("/:userId").delete(deleteUser).put(updateUser).get(getUserById)
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend)

module.exports = router;