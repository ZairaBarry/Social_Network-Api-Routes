const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController');

// api/users
router.route('/').get(getUsers).post(createUser);

// /api/students/:studentId
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);


///api/users/:userId/friends/
router.route('/:userId/friends').post(addFriend)

// ///api/users/:userId/friends/:friendId
router.route('/:userId/friends/friendsId').delete(deleteFriend)

module.exports = router;
