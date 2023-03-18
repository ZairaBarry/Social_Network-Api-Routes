const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../..controllers/userController');

// api/users
router.route('/').get(getUsers).post(createUser);

// /api/students/:studentId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);


///api/users/:userId/friends/:friendId
router.router('/userId/friends/;friendId').post(addFriend).delete(deleteFriend)


modelu.export = router;
