const express = require('express');
const cors = require('cors');
const app = express();
const config = {
    application: {
        cors: {
            server: [{
                origin: "localhost:3000",
                credentials: true
            }]
        }
    }
}

app.use(cors(config.application.cors.server));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());

const mongoose = require('mongoose');

// app.use(require('./middlewares/authentication'));
app.use(require('./routes/users'));
app.use(require('./routes/posts'));
app.use(require('./routes/comments'));
app.use(require('./routes/badWords'));

mongoose.connect('mongodb://localhost:27017/blog', (err, res) => {
    if (err) throw err;

    console.log('Database is connected');
})

app.listen(3000, () => {
    console.log('Server is connected in port 3000')
});