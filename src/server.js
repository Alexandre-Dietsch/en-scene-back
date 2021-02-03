const express = require('express');
const cors = require('cors');
const routes = require('./routes');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Settings
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.status(200).send('Server running 🚀');
});

app.use('/api', routes);

app.listen(port, () => console.log(`server is running on port ${port} 🚀`));