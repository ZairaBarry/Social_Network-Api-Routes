const { Thought, User } = require('../models');

module.exports = {
    // get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .populate({ path: 'reactions' })
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err))
    },

    //get a single thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.id })
            .populate({ path: 'reactions' })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No thought found with that ID" })
                    : res.json(thought)
            )
            .catch((err) = res.status(500).json(err))
    },

    //create a new thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.id },
                    { $addToSet: { thoughts: _id } },
                    { new: true }
                );
            })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'Thought is created but no user with this id!' })
                    : res.json("Created the thought")
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // update a user by id
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    //delete a user by id
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.id })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No thought found with that ID" })
                    : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // create reaction
    createReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.id },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No thought found with that ID" })
                    : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });

    },

    deleteReaction(req, res) {
        Thought.findOneAndDelete(
            { _id: req.params.id },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No thought found with that ID" })
                    : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    }
};

