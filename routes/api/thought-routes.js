const router = require('express').Router();
const {addReaction, createThought, updateThought, deleteThought, getAllThoughts, getThoughtById, deleteReaction} = require('../../controllers/thought-controller')
router.route("/").post(createThought).get(getAllThoughts)
router.route("/:thoughtId").delete(deleteThought).put(updateThought).get(getThoughtById)
router.route("/reactions/:thoughtId").post(addReaction)
router.route("/reactions/:thoughtId/:reactionId").delete(deleteReaction)

module.exports = router;