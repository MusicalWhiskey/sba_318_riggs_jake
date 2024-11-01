import express from "express";
import "dotenv/config";
import accountsRouter from "./routes/accounts.js";
import postsRouter from "./routes/posts.js";
import usersRouter from "./routes/users.js";


const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));
const PORT = process.env.PORT || 3000;

app.use(express.json());

const posts = [
  { id: 1, userId: 1, postId: 1, content: "Hey there! This is a posty post. Check it out!" },
  { id: 2, userId: 2, postId: 1, content: "This is also a posty post. Don't look at it though!" },
  { id: 3, userId: 1, postId: 2, content: "This is another post. I'm not sure what to put here." },
  { id: 4, userId: 2, postId: 2, content: "Woogity Woogity Woogity" },
  { id: 5, userId: 1, postId: 3, content: "BeepBoopBeepBoop" },
  { id: 6, userId: 2, postId: 3, content: "I I I.....Want to Rock n Roll All Nigh I I t...." }
];

app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/accounts", accountsRouter);


//Logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


//Homepage
app.get("/", (req, res) => {
	
  res.render('index', { posts: posts });
});


//404 Error Handler
app.use((req, res) => {
  res.status(404).json({ error: "Resource Not found" });
});


//General Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message});
});


app.listen(PORT, () => {
    console.log(`We live on port: ${PORT}`);
  });