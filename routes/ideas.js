const express = require("express");
const router = express.Router();

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

// get all ideas
router.get("/", (req, res) => {
  //   res.send("Hello World");
  res.json({ success: true, data: ideas });
});

// get with id
router.get("/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    res.status(404).json({ success: false, error: "Resource Not found" });
  }

  res.json({ success: true, data: idea });
});

// Add an Idea
router.post("/", (req, res) => {
  const idea = {
    id: ideas.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    dat: new Date().toISOString().slice(0, 10),
  };

  ideas.push(idea);

  res.json({ success: true, data: idea });

  res.send(req.body.text);
});

module.exports = router;
