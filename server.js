const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const xlsx = require("xlsx");
const jsPDF = require("jspdf");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = "your-secret-key";

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mock user database
const users = require("./users.json");

// Login endpoint
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ username: user.username }, SECRET_KEY, {
    expiresIn: "1h",
  });
  res.json({ token });
});

// Wage calculation endpoint
app.post("/calculate", (req, res) => {
  const { hours, rate } = req.body;
  const totalWage = hours * rate;
  res.json({ totalWage });
});

// Export to Excel
app.post("/export/excel", (req, res) => {
  const { totalWage } = req.body;
  const ws = xlsx.utils.json_to_sheet([{ TotalWage: totalWage }]);
  const wb = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(wb, ws, "Wage");
  const filePath = path.join(__dirname, "exports", "wage.xlsx");
  xlsx.writeFile(wb, filePath);
  res.download(filePath);
});

// Export to PDF
app.post("/export/pdf", (req, res) => {
  const { totalWage } = req.body;
  const doc = new jsPDF();
  doc.text(`Total Wage: $${totalWage}`, 10, 10);
  const filePath = path.join(__dirname, "exports", "wage.pdf");
  doc.save(filePath);
  res.download(filePath);
});

// Export to CSV
app.post("/export/csv", (req, res) => {
  const { totalWage } = req.body;
  const csvData = `Total Wage\n${totalWage}`;
  const filePath = path.join(__dirname, "exports", "wage.csv");
  fs.writeFileSync(filePath, csvData);
  res.download(filePath);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});