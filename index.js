const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const errorHandler = require('./middleware/errorHandler');
const mainroutes = require('./routes/mainroutes');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    }
    return next();
});

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static('public'));

app.get("/test",(req,res,next)=>{
    res.send("Request Recieved");
})
app.use(mainroutes);

app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server Running");
})
