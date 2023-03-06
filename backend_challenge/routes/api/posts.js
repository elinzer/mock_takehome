const express = require('express');
const router = express.Router();
const { Post } = require('../../db/models');

// ping route
router.get('/ping', (req, res) => {
    res.json({ "status": "good" });
});

// get all posts in order by Date
router.get('/', async (req, res) => {

    const posts = await Post.findAll({
        order: [
            ['createdAt', 'DESC']
        ]
    });

    res.json(posts);
});

// get single post by id
router.get('/:id', async (req, res) => {
    const post = await Post.findByPk(req.params.id);
    res.json(post);
});

// post new post
router.post('/', async (req, res) => {
    const { title, coffee, text, rating } = req.body;
    const post = await Post.create({
        title,
        coffee,
        text,
        rating
    });
    res.json(post);
});

//sort posts by coffee
// router.get('/post/coffee', async (req, res) => {
//     const posts = await Post.findAll({
//         where: {
//             coffee:
//     });

//     res.json(posts);
// }
