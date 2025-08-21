const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve index.html from same folder
app.use(express.static(path.join(__dirname)));

const JUDGE0_URL = "https://ce.judge0.com/submissions/?base64_encoded=false&wait=true";

app.post("/run", async (req, res) => {
  const { source_code, language_id } = req.body;

  try {
    const judgeRes = await axios.post(JUDGE0_URL, {
      source_code,
      language_id,
      stdin: ""
    });

    const output = judgeRes.data.stdout || judgeRes.data.stderr || judgeRes.data.compile_output || "";
    const status = judgeRes.data.status.description;

    res.json({ output, status });
  } catch (err) {
    res.status(500).json({ error: "Execution failed", details: err.message });
  }
});

// Serve homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
