import express from 'express';
import posts from '../data/posts.js'
import users from '../data/users.js'
import accounts from '../data/accounts.js'

const router = express.Router();


router.get('/', (req, res) => {
  res.render('index', { posts: posts });
});

router.get('/', (req, res) => {
    const { userId } = req.query;
    let filteredPosts = posts;
  
    if (userId) {
      filteredPosts = filteredPosts.filter(post => post.userId === parseInt(userId));
    }
  
    res.send(filteredPosts);
    next();
  });


router.get('/:id', (req, res) => {s
    const id = req.params.id;
    const post = posts.find(post => post.id === parseInt(id));
    if (posts) {
        res.send(post);
    } else {
        res.status(404).send({ error: 'Post not found' });
    }
})

router.post('/', (req, res) => {
  const newPost = req.body;
  posts.push(newPost);
  res.render('index', { posts: posts, newPost: newPost });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const index = posts.findIndex(post => post.id === parseInt(id));
    if (index !== -1) {
      posts.splice(index, 1);
      res.send({ message: 'Post deleted successfully' });
    } else {
      res.status(404).send({ error: 'Post not found' });
    }
  })


export default router