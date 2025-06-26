const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/remote.js", (req, res) => {
  const jsCode = `
    // Показываем страницу, если скрипт загрузился с сервера
    document.body.style.display = "block";
  `;
  res.setHeader("Content-Type", "application/javascript");
  res.send(jsCode);
});



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server started on port", port);
});
