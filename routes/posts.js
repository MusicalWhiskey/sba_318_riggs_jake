import express from 'express';
import posts from '../data/posts.js'
import users from '../data/users.js'
import accounts from '../data/accounts.js'

const router = express.Router();


router.get('/', (req, res) => {
  res.render('index', { posts: posts });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const post = posts.find(post => post.id === parseInt(id));
  if (post) {
    res.send(post);
  } else {
    res.status(404).send({ error: 'Post not found' });
  }
});

router.post('/', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    userId: 1,
    postId: 1,
    content: req.body.content
  };
  posts.shift(); // remove the first post from the array
  posts.push(newPost); // add the new post to the end of the array
  res.render('index', { posts: posts });
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
});


export default router