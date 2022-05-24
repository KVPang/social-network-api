const Thought = require('../models')


module.exports = {
    async createThought(req, res) {
        try {
            const newThought = await Thought.create(req.body)

            res.json(newThought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async addReaction(req, res) {
        try {
            const newReaction = await Thought.findOneAndUpdate({
                _id: req.params.thoughtId
            }, {
                $addToSet: {
                    reactions: req.body
                }
            }, {new: true})
            res.json(newReaction)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async deleteReaction(req, res) {
        try {
            const deleteReaction = await Thought.findOneAndUpdate({
                _id: req.params.thoughtId
            }, {
                $pull: {
                    reactions: {reactionId:req.params.reactionId}
                }
            }, {new: true})
            res.json(deleteReaction)
        } catch (err) {
            res.status(500).json(err)
        }
    },


    async updateThought(req, res) {
        try {
            const updateThought = await Thought.findOneAndUpdate({
                _id: req.params.thoughtId
            }, req.body, {new: true})

            res.json(updateThought)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async getAllThoughts(req, res) {
        try {
            const getThoughts = await Thought.find()

            res.json(getThoughts)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async getThoughtById(req, res) {
        try {
            const getThoughtId = await Thought.findById(req.params.thoughtId,).populate("thoughts").populate("friends")
            res.json(getThoughtId)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async deleteThought(req, res) {
        try {
            const deleteThought = await Thought.findOneAndDelete({
                _id: req.params.thoughtId
            },)

            res.json(deleteThought)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

// get all thoughts
// / get thought ID
// update thought
// delete thought
