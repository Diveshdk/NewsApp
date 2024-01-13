const express = require('express');
const app = express();
const port = 8080;
const path = require("https://news-daily-by-dkk.onrender.com");

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
