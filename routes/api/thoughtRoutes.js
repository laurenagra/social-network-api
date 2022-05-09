const router = require('express').Router();

const {
    getThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtControllers');

//api/thoughts/

router.route('/').get(getThoughts)

//api/thoughts/:userId
router.route('/:userId').post(addThought)

//api/thoughts/:thoughtId
router.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought)

//api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
.post(addReaction)

//api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction)

module.exports = router;

