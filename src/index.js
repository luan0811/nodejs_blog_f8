const path = require('path');
const express = require('express');
const app = express();
const port = 3001;
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const route = require('./routes');
//định nghĩa tuyến đường

app.use(express.static(path.join(__dirname, 'public')));
//middleware (giống dispatch)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//http logger
// app.use(morgan('combined'))

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
route(app);

// đang start ra 1 cái port webserver
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
