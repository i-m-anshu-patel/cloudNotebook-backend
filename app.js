const express = require('express');
const connectToMongo = require('./db');
const bodyParser = require('body-parser');
connectToMongo();
const app = express();
const authRoutes = require('./routes/authRoutes');
const notesRoutes = require('./routes/notesRoutes');
app.use(bodyParser.json());


app.use('/auth', authRoutes);
app.use('/api/notes', notesRoutes)

app.listen(5000, () => {
    console.log("App listening at port 5000");
})