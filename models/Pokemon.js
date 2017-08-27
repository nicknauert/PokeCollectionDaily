const mongoose = require('mongoose');

const PokeSchema = new mongoose.Schema({
    Number: String,
    Name: String,
    Generation: String,
    About: String,
    Types: [String],
    Resistant: [String],
    Weaknesses: [String],
    Fast_Attacks: [{
      Name: {type: String},
      Type: String,
      Damage: Number
    }],
    Special_Attacks: [{
      Name: String,
      Type: String,
      Damage: Number
    }],
    Weight: {
      Minimum: String,
      Maximum: String
    },
    Height: {
      Minimum: String,
      Maximum: String
    },
    Buddy_Distance: String,
    Base_Stamina: String,
    Base_Attack: String,
    Base_Defense: String,
    Base_Flee_Rate: String,
    Next_Evolution_Requirements: {
      Amount: Number,
      Name: String
    },
    Next_evolutions: [{
      Number: Number,
      Name: String
    }],
    MaxCP: Number,
    MaxHP: Number
})

const Poke = mongoose.model('Poke', PokeSchema, 'pokemonlist');

module.exports = Poke
