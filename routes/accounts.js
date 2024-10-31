import express from 'express';
import data from '../data/accounts.js'
import users from '../data/users.js'
import posts from '../data/posts.js'
const router = express.Router();

router.get('/accounts/:id', (req, res) => {
    res.send({ data: "Post data here" });
});

export default router