const express = require("express");
const path = require("path");
const app = express();
const server = require("http").Server(app);
const fs = require("fs");
const _ = require("underscore");
const port = 5019;

app.use(express.static(path.join(__dirname, "build")));

const TYPING_MODE = ":typingMode(lessons|practice)";
const CONFIG_ID = ":configID([\\w_]*)";

app.get(`/api/typing/${TYPING_MODE}/:category?/${CONFIG_ID}`, (req, res) => {
  const category = req.params.category ? "/" + req.params.category : "";
  try {
    let config = require(`./server/${req.params.typingMode}${category}/${
      req.params.configID
    }.json`);
    config.navigationPath = `${req.params.typingMode}${category}`;
    res.setHeader("Content-Type", "application/json");
    res.send(config);
  } catch (e) {
    console.log(e);
    res.send({});
  }
});

app.get(`/api/load/${TYPING_MODE}/:category?`, (req, res) => {
  const category = req.params.category ? "/" + req.params.category : "";
  const typingConfigDir = `./server/${req.params.typingMode}${category}`;
  fs.readdir(typingConfigDir, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
    let typingConfigs = [];
    _.each(files, file => {
      let config = require(`${typingConfigDir}/${file}`);
      typingConfigs.push({
        path: file.replace(/\.json/, ""),
        levelID: config.name
      });
    });
    res.send({ typingConfigs });
  });
});

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get("*", function(req, res) {
  res.send("what???", 404);
});

server.listen(port, () => {
  console.log("Running server on 127.0.0.1:" + port);
});
