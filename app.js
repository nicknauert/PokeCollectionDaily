const express = require('express');
const app = express();
const mustache = require('mustache-Express');
const dal = require('./dal');
const chalk = require('chalk');
const bodyParser = require('body-parser');

app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views')

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  dal.getAllPoke().then(function(poke){
    res.render('index', { poke: poke })
  })
})

app.get('/id/:id', (req, res) => {
  dal.getPokeById(req.params.id).then( (poke) => {
    res.render('poke', { poke: poke })
  })
})

app.get('/type/:type', (req, res) => {
  dal.getPokeByType(req.params.type).then( (poke) => {
    res.render('index', { poke: poke })
  })
})

app.get('/add', (req, res) => {
  dal.getAllPoke().then(function(){
    res.render('add');
  })
})

app.post('/add', (req, res) => {
  dal.createPoke(req.body.name, req.body.type);
  res.redirect('/');
})

app.post('/delete/:id', (req, res) => {
  dal.deletePoke(req.params.id).then(function(){
    res.redirect('/');
  })
})

app.get('/edit/:id', (req, res) => {
  dal.getPokeById(req.params.id).then( (poke) => {
    res.render('edit', { poke: poke })
  })
})

app.post('/edit/:id', (req, res) => {
  dal.editPoke(req.params.id, req.body.name, req.body.aboutText)
    console.log(req.body.name + " / " + req.body.aboutText);
    res.redirect('/id/' + req.params.id);
})

app.listen(3000, () => {
  console.log('Application running on 3000.')
})
