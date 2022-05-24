const router = require('express').Router();
const {addReaction, createThought} = require('../../controllers/thought-controller')
router.route("/").post(createThought)
// router.route("/:thoughtId").delete(deleteThought)
router.route("/reactions/:thoughtId").put(addReaction)

module.exports = router;