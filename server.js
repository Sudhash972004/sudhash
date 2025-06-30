const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();
const connectDB = require('./config/db');


const authRoutes = require('./routes/authRoutes');
const leaveRoutes = require('./routes/leaveRoutes');

const app = express();
app.use(cors());
app.use(express.json());

connectDB()

app.use('/api/auth', authRoutes);
app.use('/api/leaves', leaveRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => app.listen(5000, () => console.log('Server running ')))
  .catch(err => console.log(err));


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const connectDB = require('./config/db');
// const authRoutes = require('./routes/authRoutes');
// const leaveRoutes = require('./routes/leaveRoutes');

// const app = express(); // 🔑 Must come before app.use()

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/leaves', leaveRoutes);

// // Connect to DB and start server
// connectDB();

// app.listen(5000, () => {
//   console.log('✅ Server running on port 5000');
// });