const { Schema, model, Types } = require('mangoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },

    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },

    username: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => dateFormat(date)
    },
});

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => dateFormat(date)
    },

    username: {
        type: String,
        required: true,
    },

    recations: [reactionSchema]
}
  
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,

    }
)
    const Thought = model('Thought', thoughtSchema)

    module.exports = Thought;