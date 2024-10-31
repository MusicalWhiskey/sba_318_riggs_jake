import express from 'express'
import data from '../data/users.js'
import posts from '../data/posts.js'
import accounts from '../data/accounts.js'

const router = express.Router();

router.get('/', (req, res) => {
    res.send({ data: "User data here" });
})

router.get('/:id', (req, res) => {
    const query = req.query
    res.send({ data: "User data here" });
})

export default router