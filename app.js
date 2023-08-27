require('dotenv').config();
const express = require('express')
const app = express()
const hbs = require('hbs')


app.set('view engine', 'hbs');
//hbs.registerHelper('helper_name', function (options) { return 'helper value'; });
//hbs.registerPartial('partial_name', 'partial value');

hbs.registerPartials( __dirname + '/views/partials')

app.use(express.static('public/templated-roadtrip'))

//Controller
app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Jeisson Lenis',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', function (req, res) {
    res.render('generic')
    //res.sendFile(__dirname + '/public/templated-roadtrip/generic.html')
})
app.get('/elements', function (req, res) {
    res.render('elements')
    //res.sendFile(__dirname + '/public/templated-roadtrip/elements.html')
})

app.get('*', function (req, res) {
    //res.send('404 | Page not found')
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(process.env.PORT)
