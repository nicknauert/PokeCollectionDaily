const chalk = require('chalk');
const mongoose = require('mongoose');
const Poke = require('./models/Pokemon.js')
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/pokedex')

function getAllPoke(){
  return Poke.find();
}

function getPokeById(pokeId){
  return Poke.findOne({Number:pokeId})
}

function getPokeByType(type){
  return Poke.find({ types: [type] }) //broken
}

function createPoke(name, type){
  Poke.create({ Name: name, Types: [type]}, function (err, poke) {
    if (err) return handleError(err);
  })
}

function deletePoke(id){
  Poke.deleteOne({ Number: id });
}

function editPoke(id, name, about){
  Poke.updateOne(
    {Number: id },
    {$set: { "Name": name, "About": about }},
    function(err, r){
      if (err){
        console.log(err);
      }
  })
}




module.exports = {
  getAllPoke, getPokeByType, getPokeById, createPoke, editPoke
}
