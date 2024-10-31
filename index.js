import express from "express";
import "dotenv/config";

const app = express();
// app.set("view engine", "ejs");
app.use(express.static("public"));
const PORT = process.env.PORT || 3000;




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