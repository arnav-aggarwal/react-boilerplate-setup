const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.set('port', port);
app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
    console.log('Serving ', req.url);
    res.sendFile(__dirname + '/dist/app.html');
});

app.listen(port, () => console.log('Listening on port', port));
