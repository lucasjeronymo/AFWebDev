const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const burgerRoutes = require('./routes/burgerRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = 'mongodb://localhost:27017/AF_WEB';

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB', error);
});

app.use('/burgers', burgerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
