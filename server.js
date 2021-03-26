require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;
<<<<<<< HEAD
=======

const sequelize = require('./config/connection');

// for file uploading image
const fileupload = require('express-fileupload')

const session = require('express-session');

>>>>>>> feature/file-upload
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const helpers = require('./utils/helpers');
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

<<<<<<< HEAD
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
=======
// for file uploading image
app.use(fileupload())
>>>>>>> feature/file-upload
app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./Routes'));

// turn on routes
app.use(routes);

<<<<<<< HEAD
// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
=======
sequelize.sync({ force: false}).then(() => {
>>>>>>> feature/file-upload
  app.listen(PORT, () => console.log('Now listening'));
});




