import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  let firstName = req.body["fName"].toUpperCase();
  let lastName = req.body["lName"].toUpperCase();
  let fullName = firstName + " " + lastName;
  const numLetters = req.body["fName"].length + req.body["lName"].length;
  const data = {
    numOfLetters: numLetters,
    name: fullName,
  };
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
