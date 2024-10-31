import express from 'express';
import accounts from '../data/accounts.js'
import users from '../data/users.js'
import posts from '../data/posts.js'
const router = express.Router();


router.get('/', (req, res) => {
    res.send(accounts);
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const account = accounts.find(account => account.id === parseInt(id));
    if (account) {
        res.send(account);
    } else {
        res.status(404).send({ error: 'Account not found' });
    }
});

export default router