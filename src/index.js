const path = require('path')
const express = require('express')
const app = express()
const port = 3001
const morgan = require('morgan')
const handlebars = require('express-handlebars');
//định nghĩa tuyến đường

app.use(express.static(path.join(__dirname,'public')))

//http logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})