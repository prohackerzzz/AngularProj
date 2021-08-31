const router = require('express').Router();
const User = require('../model/user.model');

router.route('/add').post((req,res)=>{
    const title = req.body.title
    const desc= req.body.desc
    const active= req.body.active


    const newUser = new User({title,desc,active});
    newUser.save()
    .then(()=>res.json("Added successfully"))
    .catch(err=>res.status(400).json('Error:' +err))
});

router.route('/add').get((req,res)=>{
    User.find()
    .then(users=> res.json(users))
    .catch(err=>res.json('Error 600'+err))
    
});
router.delete('/:id',(req,res)=>{
    console.log(req.params.id);
    User.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){res.status(200).json({
            doc
        })}
        else{
            console.log("unable to delete")
        }
    })
})
router.put('/update/:id',(req,res)=>{
    User.findByIdAndUpdate(req.params.id,{"active":req.body.active},
    (err,doc)=>{
        if(!err){
            res.status(200).json({
                message:"Updated Successfully"
            })
        }
        else{
            console.log(err)
        }
    })
    
})

module.exports = router;