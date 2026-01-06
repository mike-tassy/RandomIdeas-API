const express = require("express");
const res = require("express/lib/response");
const port = 5000;

const app = express();

//Body Parter Middlware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//these are routes
app.get("/", (req, res) => {
  //   res.send("Hello World");
  res.json({ message: "Welcome to the RandomIdeas APi" });
});

const ideasRouter = require("./routes/ideas");
app.use("/api/ideas", ideasRouter);

app.listen(port, () => console.log(`Server Listening on Port ${port}`));
