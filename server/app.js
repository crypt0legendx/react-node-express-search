/**
 * The Server Can be configured and created here...
 * 
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details 
{
    "_id": "019",
    "isActive": "false",
    "price": "23.00",
    "picture": "/img/products/N16501_430.png",
    "name": "Damage Reverse Thickening Conditioner",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
        "ojon",
        "conditioner"
    ]
}
*/
const express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser');
const router = express.Router();
const app = express();

const data = require('./data');
const http = require('http');
const hostname = 'localhost';
const port = 3035;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

router.post('/searchData', (req, response) => {
    if (req.body.value === undefined) {
        response.status(400).send({ 'data': { 'message': 'please fill the search field' } });
    }

    const searchVal = req.body.value
    const filterData = data.filter(d => d.name.includes(searchVal));

    response.send({ 'data': filterData })
});


// add router in the Express app.   
app.use("/", router);


http.createServer(app).listen(port);
console.log(`[Server running on ${hostname}:${port}]`);