import express from "express";
import "dotenv/config";
import accountsRouter from "./routes/accounts.js";
import postsRouter from "./routes/posts.js";
import usersRouter from "./routes/users.js";

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
const PORT = process.env.PORT || 3000;

app.use(express.json()); //parsing request bodies

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
	
  res.send("Hey there! Welcome to the nothing page!");
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