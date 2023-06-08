const express = require('express');
const path = require('path');

const app = express();

const staticPath = path.join(__dirname, '../public')

app.use(express.static(staticPath));
const port = 3000;

app.set('view engine', "hbs");

app.get('/', (req, res) => { 
    res.render("index")
})

app.listen(port, () => { 

    console.log(`listening on http://127.0.0.1:${port}`)

})