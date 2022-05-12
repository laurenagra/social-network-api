const router = require('express').Router();

const {
    getUsers,
    createUser,
    getSingleUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userControllers');

// /api/users
router.route('/')
.get(getUsers)
.post(createUser);

// /api/users/:id
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

// /api/users/:id/friends/:friendId

router.route('/:userId/friends/:friendID')
.post(addFriend)
.delete(removeFriend)


module.exports = router;