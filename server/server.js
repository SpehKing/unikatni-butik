const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

// Serve static files from the Angular app
app.use(express.static(path.join(__dirname, '../dist/project-name')));

// Handle SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/project-name/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));



//mongoose.connect('mongodb://localhost/yourdbname');
