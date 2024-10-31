import express from 'express';
import posts from '../data/posts.js'
import users from '../data/users.js'
import accounts from '../data/accounts.js'

const router = express.Router();

router.get('/', (req, res) => {
    res.send(posts);
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const post = posts.find(post => post.id === parseInt(id));
    if (posts) {
        res.send(post);
    } else {
        res.status(404).send({ error: 'Post not found' });
    }
})

export default router