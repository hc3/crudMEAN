'use strict';

const express = require('express');
const router = express.Router();
const Organism = require('./organism/organism_pessoa');
const Create = require('./brainCreate')(Organism);
const Find = require('./brainFind')(Organism);
const FindOne = require('./brainFindOne')(Organism);
const Update = require('./brainUpdate')(Organism);
const Remove = require('./brainRemove')(Organism);

router.get('/',(req,res) => { Find });	
router.get('/:id',(req,res) => { FindOne });
router.post('/',(req,res) => { Create });
router.put('/:id',(req,res) => { Update });
router.delete('/:id',(req,res) => { Remove });


module.exports = router;




