const express = require('express');
const router = express.Router();
let ejs = require('ejs');
const multer = require('multer');
const path = require('path');
var fs = require('fs');
var regmodel = require('../models/regmodel');

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname)
    }
});
var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        var ext = path.extname(file.originalname)
        if ((ext!='.png') && (ext!='.jpg') && (ext!='.jpeg')) {
            return cb(new Error('Wrong file type'));
        }
        cb(null, true)
    }
}).single('img');

router.get("/register", async (req, res, next) => {
    res.render("register");
})


router.get('/home',async (req, res) => { 
    var items = await regmodel.find();
    res.render('homepage',{items:items}); 
}); 


router.post('/postreg', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.render("failure");
        }
        var obj = {
            title: req.body.title,
            des: req.body.des,
            img: {
                data: fs.readFileSync(path.join(__dirname + '/../uploads/' + req.file.filename)),
                contentType: 'image/png'
            }
        }
        regmodel.create(obj, (err, item) => {
            if (err) {
                console.log(err);
            } else {
                item.save();
            }
        });
        res.render("success");
    });
});
module.exports = router;