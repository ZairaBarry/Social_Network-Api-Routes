const { Thought, User } = require('../models');

module.exports = {
    // get all thoughts
    getThoughts(req, res) {
        Thought.find({})
            .then((thought) => res.json(thought))
            .catch((err) = res.status(500).json(err))
    },

    //get a single thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No thought found with that ID" })
                    : res.json(thought)
            )
            .catch((err) = res.status(500).json(err))

    },

    //create a new user
    createThought(req, res) {
        Thought.create(req.body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                );
            })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });



        // update a user by id
        updateThought(req, res) {
            Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
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



            //delete a user by id
            deleteThought(req, res) {
                Thought.findOneAndDelete({ _id: req.params.thoughtId })
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
                    { _id: req.params.thoughtId },
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
                Thought.findOneAndUpdate(
                    { _id: req.params.thoughtId },
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


        }

    }