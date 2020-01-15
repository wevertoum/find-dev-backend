const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
dotenv.config();
mongoose.connect(`mongodb+srv://${process.env.API_USER}:${process.env.API_KEY}@cluster0-a26sr.mongodb.net/week10?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT);