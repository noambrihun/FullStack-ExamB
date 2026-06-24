const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const routes = require('./routes/routes');

app.use(cors());
app.use(express.json());
app.use('/workouts', routes);

mongoose.connect(process.env.MONGO_URI)
.then(() =>  console.log('Connected to MongoDB'))
.catch((err) =>  console.log('Error connecting to MongoDB', err));


app.get('/', (req, res) => {
    res.status(200).json({ message: 'workouts api is running' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});