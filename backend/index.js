const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

// ✅ Allow only frontend origin
app.use(cors({
  origin: 'https://nakulverse.netlify.app',
  credentials: true
}));
app.use(express.json());
app.use(express.static('public')); // this auto-sets correct MIME types
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
