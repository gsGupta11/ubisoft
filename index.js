const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const errorHandler = require('./middleware/errorHandler')


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    }
    return next();
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get("/test",(req,res,next)=>{
    res.send("Request Recieved");
})


app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server Running");
})
