import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));

let movieList = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { mName: movieList });
});

app.post("/submit", (req, res) => {
  movieList.push(req.body["movieName"]);
  res.redirect("/");
});

app.post("/delete", (req, res) => {
  movieList = movieList.filter(movie => movie !== req.body["movieName"]);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;