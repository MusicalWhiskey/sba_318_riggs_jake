import express from 'express'
import users from '../data/users.js'
// import posts from '../data/posts.js'
// import accounts from '../data/accounts.js'

const router = express.Router();

router.get('/', (req, res) => {
    res.send(users);
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id === parseInt(id));
    if (user) {
        res.send(user);
    } else {
        res.status(404).send({ error: 'User not found' });
    }
})
export default router