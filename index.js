const express = require('express');
const dotenv = require('dotenv');
const { getSectors, saveUser, editUser } = require('./controllers');
const { connectDB } = require('./utils');
const cors = require('cors');

dotenv.config();
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get('/api/sectors', getSectors);
app.post('/api/users', saveUser);
app.route('/api/users').post(saveUser).put(editUser);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`App running on port ${PORT}`);
});
