const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/remote.js", (req, res) => {
  const jsCode = `
    console.log("Remote script loaded from Railway");

    const banner = document.createElement("div");
    banner.textContent = "🔥";
    banner.style.cssText = "position:fixed;top:0;left:0;width:100%;background:#f00;color:#fff;padding:10px;text-align:center;z-index:9999;";
    document.body.prepend(banner);
  `;
  res.setHeader("Content-Type", "application/javascript");
  res.send(jsCode);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server started on port", port);
});
