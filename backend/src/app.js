const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');

app.use(express.json());  // Middleware to parse JSON bodies
app.use('/api', apiRoutes);  // Use the API routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
