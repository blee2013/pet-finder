
// require('dotenv').config();
// //const routes = require('./routes');
// // import sequelize connection
// const sequelize = require('./config/connection');
// const db = require("./models");
// const path = require('path');
// const express = require('express');
// const exphbs = require('express-handlebars');

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(express.static('public'));

// //app.use(routes);

// // sync sequelize models to the database, then turn on the server
// // turn on connection to db and server



// const session = require('express-session');

// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const helpers = require('./utils/helpers');
// const hbs = exphbs.create({ helpers });


// const sess= {
//     // secret: 'Super secret secret',
//     secret: process.env.SECRET,
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore ({
//         db: sequelize
//     })
// };

// app.use(session(sess));
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => console.log('Now listening'));
// });

require('dotenv').config();
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');



const session = require('express-session');

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


app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: true}).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
