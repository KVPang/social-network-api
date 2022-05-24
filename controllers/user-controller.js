const Users = require('../models')


module.exports = {
    async createUser(req, res) {
        try {
            const newUser = await User.create(req.body)

            res.json(newUser)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async addFriend(req, res) {
        try {
            const newFriend = await User.findOneAndUpdate({
                _id: req.params.userId
            }, {
                $addToSet: {
                    friends: req.params.friendId
                }
            }, {new: true})
            res.json(newFriend)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async deleteFriend(req, res) {
        try {
            const deleteFriend = await User.findOneAndUpdate({
                _id: req.params.userId
            }, {
                $pull: {
                    friends: req.params.friendId
                }
            }, {new: true})
            res.json(deleteFriend)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async updateUser(req, res) {
        try {
            const updateUser = await User.findOneAndUpdate({
                _id: req.params.userId
            }, req.body, {new: true})

            res.json(updateUser)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async getAllUsers(req, res) {
        try {
            const getUsers = await User.find()

            res.json(getUsers)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async getUserById(req, res) {
        try {
            const getUserId = await User.findById(req.params.userId,).populate("thoughts").populate("friends")
            res.json(getUserId)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async deleteUser(req, res) {
        try {
            const deleteUser = await User.findOneAndDelete({
                _id: req.params.userId
            },)

            res.json(deleteUser)
        } catch (err) {
            res.status(500).json(err)
        }

    }
}
