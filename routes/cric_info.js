const express = require('express')
const router = express.Router()
const Cric_info = require('../models/cric_info')


router.get('/', async(req,res) => {
    try{
           const cricketer = await Cric_info.find()
           res.json(cricketer)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const cricketer = await Cric_info.findById(req.params.id)
           res.json(cricketer)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const cricketer = new Cric_info({
        name: req.body.name,
        age: req.body.age,
        runs: req.body.runs,
        fours: req.body.fours,
        sixes: req.body.sixes,
    })

    try{
        const a1 =  await cricketer.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.delete('/:id',async(req,res)=> {
    try{
        const cricketer = await Cric_info.findById(req.params.id)
        const a1 = await cricketer.remove()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router