const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5001;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // React app's URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));
app.use(bodyParser.json());

// Route to handle calculation
app.post("/calculate", (req, res) => {
  const { expression } = req.body;
  console.log('Received expression:', expression);
  try {
    // Evaluate the expression
    const result = eval(expression); // Use eval carefully; validate input in production
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: "Invalid expression" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
