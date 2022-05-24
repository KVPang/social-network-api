const Users = require('../models')


module.exports = {
    async createUser (req, res) {
        try {
            const newUser = await User.create(req.body)
            
            res.json(newUser)
        } catch (err){
            res.status(500).json(err)
        }
    }, 
    async addReaction (req, res) {
        try {
            const newReaction = await User.findOneAndUpdate(
                { _id: req.params.userId},
                {$addToSet: {reactions: req.body}},
                { new: true }
            )
            res.json(newReaction)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async updateUser (req, res) {
        try {
            const updateUser = await User.findOneAndUpdate(
                {_id: req.params.userId},
                req.body,
                { new: true }
            )
            
            res.json(updateUser)
        } catch (err){
            res.status(500).json(err)
        }
    },

    async getAllUsers (req, res) {
        try {
            const getUsers = await User.find()
            
            res.json(getUsers)
        } catch (err){
            res.status(500).json(err)
        }
    },

    async getUserById (req, res) {
        try {
            const getUserId = await User.findById(
                req.params.userId,
            )
            .populate("thoughts")
            .populate("friends")
            res.json(getUserId)
        } catch (err){
            res.status(500).json(err)
        }
    }

}

