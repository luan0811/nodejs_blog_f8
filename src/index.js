const path = require('path');
const express = require('express');
const app = express();
const port = 3001;
const morgan = require('morgan');
const handlebars = require('express-handlebars');
var methodOverride = require('method-override');

const route = require('./routes');
//định nghĩa tuyến đường

const db = require('./config/db');
db.connect();
//kết nối database

app.use(express.static(path.join(__dirname, 'public')));
//middleware (giống dispatch)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
//http logger
// app.use(morgan('combined'))

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// app.use(express.static(__dirname + '/public'))
route(app);

// đang start ra 1 cái port webserver
app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
