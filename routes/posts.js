var express = require('express');
var router = express.Router();
const postsController = require('../controller/postsController.js')
const handleErrorAsync = require('../service/handleErrorAsync.js')
const app = require('../app.js');
const checkUserId = require('../service/checkUserId')
const checkPostId = require('../service/checkPostId.js')

router.get('/', handleErrorAsync(postsController.getAllPosts))
router.get('/:id', checkPostId, handleErrorAsync(postsController.getPost))
router.post('/', checkUserId, handleErrorAsync(postsController.createPost))

router.delete('/:id', checkPostId, handleErrorAsync(postsController.deletePost))
router.patch('/:id', checkUserId, checkPostId, handleErrorAsync(postsController.updatePost))


// router.delete('/', postsController.deleteAllPosts)

module.exports = router;
