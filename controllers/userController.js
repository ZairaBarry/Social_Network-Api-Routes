const { User, Thought } = require('../models');

module.exports = {
  // get all users
  getUsers(req, res) {
    try {
      User.find()
        .then((users) => res.json(users))
    } catch (err) { res.status(500).json(err) }
  },

  //get a single user
  getSingleUser(req, res) {
    try {
      User.findOne({ _id: req.params.id })
        .populate({ path: "thoughts" })
        .populate({ path: "friends" })

        .then((user) =>
          !user
            ? res.status(404).json({ message: "No user found with that ID" })
            : res.json(user)
        )
    } catch (err) { res.status(500).json(err) }

  },

  //create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) = res.status(500).json(err))
  },


  // update a user by id
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'user with this id!' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },


  //delete a user by id
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.id })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with that ID" })
          : Thought.deleteMany({ _id: { $in: user.thought } })
      )

      .then(() => res.json({ message: "User and associated thought deleted" }))
      .catch((err) => res.status(500).json(err))
  },

  // add a new friend to user's friend list
  addFriend({params}, res) {
    User.findOneAndUpdate(
      { _id: params.id },
      { $push: { friends: params.friendId } },
      { new: true }
    )

      .then((user) =>
        !user
          ? res.status(404).json({ message: 'NO user with this id!' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // delete a friend droma  users' friend list

  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )

      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
};

