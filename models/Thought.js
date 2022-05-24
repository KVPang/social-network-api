const { Schema, model } = require('mongoose');
const ReactionSchema = require('./Reaction');
const moment = require('moment')

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'Thought text is Required',
            minlength: 1,
            maxlength: 280
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => moment(createdAtVal).format('MMMM Do YYYY, h:mm:ss a')
        },

        username: {
            type: String,
            required: 'Username is Required'
        },

        reactions: [ ReactionSchema ]

    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;