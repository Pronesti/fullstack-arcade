const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const users = require('./routes/api/users');
const admin = require('./routes/admin/index');

const app = express();
const path = require('path');

//BodyParser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB

mongoose.connect(db)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

// Use Routes

app.use('/api/items', items);
app.use('/api/users', users);
app.get('/admin', (req, res) => {
    res.send("hello admin");
});

// Serve static assets if in production

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}



const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port ' + port));

