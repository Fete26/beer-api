const express = require('express');
const beerRouter = express.Router();


beerRouter.get('/', (req,res)=>{
res.send('(Pretend this is a list of beers)');
});

beerRouter.post('/',(req,res)=>{
console.log(req.body);
res.send(`Saved your ${req.body.name} to the db`);
});



beerRouter.use('/',(req,res)=>{
    res.send('Beer Router is Working');
});

module.exports = beerRouter;