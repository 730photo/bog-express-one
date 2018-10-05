const express = require('express')
const router = express.Router()

const { Creature } = require('../db/schema.js')

// Get All Creatures - INDEX

router.get('/', async (req, res) => {
    try {
      const creatures = await Creature.find({})
      res.json(creatures)
    } catch (err) {
      console.log(err)
    }
  })



// Get One Creature by ID - SHOW

router.get('/:id', async (req, res) => {
    try {
      const creatureId = req.params.id
      const creature = await Creature.findById(creatureId)
      res.json(creature)
    } catch (err) {
      console.log(err)
      res.json(err)
    }
  })
  



// Create new Creature - CREATE

router.post('/', async (req, res) => {
    try {
      const newCreature = req.body
      const savedCreature = await Creature.create(newCreature)
      res.json(savedCreature)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })


// Update a creature - UPDATE

router.put('/:id', async (req, res) => {
    try {
      const creatureId = req.params.id
      const updatedCreature = req.body
      const savedCreature = await Creature.findByIdAndUpdate(creatureId, updatedCreature)
      res.json(savedCreature)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })


// Delete a creature - DELETE

router.delete('/:id', async (req, res) => {
    try {
      const creatureId = req.params.id
      await Creature.findByIdAndRemove(creatureId)
      res.json({
        msg: 'Successfully Deleted'
      })
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })