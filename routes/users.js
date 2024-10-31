import express from 'express'
import users from '../data/users.js'
import posts from '../data/posts.js'
import accounts from '../data/accounts.js'

const router = express.Router();

router.get('/users', (req, res) => {
    res.send(users);
})

router.get('/users/:id', (req, res) => {
    const query = req.query
    res.send(users);
})

export default router