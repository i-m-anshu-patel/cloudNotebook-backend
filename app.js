const express = require('express');
const connectToMongo = require('./db');
const bodyParser = require('body-parser');

const path = require('path')
connectToMongo();
const app = express();
const authRoutes = require('./routes/authRoutes');
const notesRoutes = require('./routes/notesRoutes');
app.use(bodyParser.json());
app.get('/', (req, res) => {
   res.send("Hello world");
});

app.use('/auth', authRoutes);
app.use('/api/notes', notesRoutes)

app.listen(3000, () => {
    console.log("App listening at port 3000");
})