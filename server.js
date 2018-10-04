const express = require("express")
const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express()
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'), (err) => {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.listen(PORT, function() {
    console.log(`Server listening on Port: ${PORT}!`);
});

