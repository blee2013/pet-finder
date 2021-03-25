require('dotenv').config();
const multer = require('multer');
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');

// for file uploading image
const fileupload = require('express-fileupload')

const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const helpers = require('./utils/helpers');
const { addHook } = require('./models/Pet');
const hbs = exphbs.create({ helpers });


const sess= {
    // secret: 'Super secret secret',
    secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore ({
        db: sequelize
    })
};

// for file uploading image
app.use(fileupload())
// view setup engine for Multer
// app.set("ejsfolder", path.join(__dirname, "ejsfolder"))
app.set('view engine', 'ejs')


app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set("ejsfolder", path.join(__dirname, "ejsfolder"))




var storage = multer.diskStorage({
  destination: function (req, file, cb) {

      // Uploads is the Upload_folder_name
      cb(null, "uploads")
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now()+".jpg")
  }
})

// define size of image for uploading
const maxSize = 1 * 1000 * 1000;

let upload = multer({
  storage: storage,
  limits: {filesize: maxSize},
  fileFilter: function(req, file, cb) {

    // set filetypes
    let filetypes = /jpg|jpeg|png/;
    let mimetype = filetypes.test(file.mimetype);

    let extname = filetypes.test(path.extname(
      file.originalname).toLowerCase());

      if(mimetype && extname) {
        return cb(null, true);
      }
      cb("Error: File upload only supports the " + "following filetypes - " + filetypes)

  }
})
// mypic is name of file attribute
.single("mypic");

app.get("/", function (req, res){
  res.render("homepage");
})

app.post("/uploadProfilePicture", function (req, res, next){

  // error middleware for multer file upload error
  upload(req, res, function(err){
    if (err){
      res.send(err)
    } else {
      res.send("Success, image uploaded!")
    }
  })
})

app.use(require('./controllers/'));

sequelize.sync({ force: false}).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
})
