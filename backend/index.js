const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

const allowedOrigins = [
  'https://nakulverse.netlify.app', // production
  'http://localhost:5173'           // development
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));


app.use((req, res, next) => {
  console.log("Origin:", req.headers.origin);
  next();
});

app.use(express.json());
app.use(express.static('public')); // this auto-sets correct MIME types
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
