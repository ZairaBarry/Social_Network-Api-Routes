const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

// api/thought
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughttId
router.route('/:id').get(getSingleThought).put(updateThought).delete(deleteThought);


///api/thoughts/:thoughtId/reactions/
router.route('/:id/reactions/').post(createReaction);

///api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:id/reactions/:reactionId').delete(deleteReaction)


module.exports = router;







