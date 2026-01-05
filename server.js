const express = require("express");
const res = require("express/lib/response");
const port = 5000;

const app = express();

const ideas = [
  {
    id: 1,
    text: "I can do this all day.",
    tag: "CaptainAmerica",
    username: "steverogers",
    date: "2012-05-04",
  },
  {
    id: 2,
    text: "Genius, billionaire, playboy, philanthropist.",
    tag: "IronMan",
    username: "tonystark",
    date: "2010-05-07",
  },
  {
    id: 3,
    text: "That's my secret, I'm always angry.",
    tag: "Hulk",
    username: "brucebanner",
    date: "2012-05-04",
  },
  {
    id: 4,
    text: "If you step out that door, you are an Avenger.",
    tag: "BlackWidow",
    username: "natromanoff",
    date: "2015-05-01",
  },
  {
    id: 5,
    text: "I am burdened with glorious purpose.",
    tag: "Loki",
    username: "godofmischief",
    date: "2012-05-04",
  },
  {
    id: 6,
    text: "Bring me Thanos!",
    tag: "Thor",
    username: "odinson",
    date: "2019-04-26",
  },
];

app.get("/", (req, res) => {
  //   res.send("Hello World");
  res.json({ message: "Welcome to the RandomIdeas APi" });
});

// get all ideas
app.get("/api/ideas", (req, res) => {
  //   res.send("Hello World");
  res.json({ success: true, data: ideas });
});

// get with id
app.get("/api/ideas/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    res.status(404).json({ success: false, error: "Resource Not found" });
  }

  res.json({ success: true, data: idea });
});

app.listen(port, () => console.log(`Server Listening on Port ${port}`));
