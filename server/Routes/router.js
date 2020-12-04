const express = require('express');
const router = express.Router();
const Products = require("../models/products");

router.get("/", (req, res)=>{
    Products.find({}, (err, results)=>{
        if(err){
            console.log(err);
        } else{
            res.json(results);
        }
    })
});

router.post("/newProduct", (req, res)=>{
    const title= req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    const newProduct = new Products({
        title,
        imageUrl,
        description,
        price
    });
    
    newProduct.save()
        .then(()=> console.log('new product added'))
        .catch((err)=> console.log('found an err while saving new product ' + err))
});

router.get("/:id", (req, res)=>{
    Products.findById(req.params.id, (err, result)=>{
        if(err){
            console.log("Found an Error" + err);
        } else{
            res.send(result)
        }
    })
})

router.post("/:id/update", (req, res)=>{
    const title= req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    const updateProduct = {
        title,
        imageUrl,
        description,
        price
    };
    Products.findOneAndUpdate(req.params.id, updateProduct, (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.json(result)
        }
    })
})

router.delete("/:id/update", (req, res)=>{
    Products.findOneAndDelete(req.params.id, (err, result)=>{
        if(err) throw err;
        res.send("Deleted a blog")
    })
})

module.exports = router;