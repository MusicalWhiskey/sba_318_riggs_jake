import express from 'express';
import data from '../data/posts.js'
import users from '../data/users.js'
import accounts from '../data/accounts.js'

const router = express.Router();

router.get('/post/:id', (req, res) => {
    res.send({ data: "Post data here" });
});

export default router