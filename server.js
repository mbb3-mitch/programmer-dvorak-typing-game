let app = require("express")();
let server = require("http").Server(app);
let fs = require("fs");
let _ = require("underscore");
let port = 5000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/typing-test/:testID", (req, res) => {
  try {
    const test = require(`./server/typing_tests/${req.params.testID}`);
    res.setHeader("Content-Type", "application/json");
    res.send(test);
  } catch (e) {
    console.log(e);
    res.send({});
  }
});

app.get("/loadTests", (req, res) => {
  const typingTestDir = "./server/typing_tests";
  fs.readdir(typingTestDir, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
    let typingTests = [];
    _.each(files, file => {
      let testConfig = require(`${typingTestDir}/${file}`);
      typingTests.push({
        path : file.replace(/\.json/, ""),
        levelID : testConfig.testName
      });
    });
    res.send({ typingTests });
  });
});

server.listen(port, () => {
  console.log("Running server on 127.0.0.1:" + port);
});
