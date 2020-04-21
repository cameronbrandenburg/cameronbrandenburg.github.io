const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.static("public"));
app.use(express.json());
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/restaurants", {useUnifiedTopology:true, useNewUrlParser:true})
    .then(()=>console.log("Connected to mongodb"))
    .catch(err => console.error("couldn't connect to mongdb", err));

const restaurantSchema = new mongoose.Schema({
    name:String,
    address:String,
    priceRange:String,
    specialties:[String],
    //specialties:String,
    rating:Number,
    hours:String
});

const Restaurant = mongoose.model('Restaurant',restaurantSchema);

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/restaurants', (req,res)=>{
    getRestaurants(res);
});

async function getRestaurants(res){
    const restaurants = await Restaurant.find();
    console.log(restaurants);
    res.send(restaurants);
}

app.get('/api/restaurants/:id',(req,res)=>{
    getRestaurant(req.params.id, res);
});

async function getRestaurant(id, res){
    const restaurant = await Restaurant.findOne({_id:id});
    console.log(restaurant);
    res.send(restaurant);
}

app.post('/api/restaurants', (req,res)=>{
    const result = validateRestaurant(req.body);
    
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    
    const restaurant = new Restaurant({
        name:req.body.name,
        address:req.body.address,
        priceRange:req.body.priceRange,
        specialties:req.body.specialties,
        rating:req.body.rating,
        hours:req.body.hours
    });

    createRestaurant(restaurant,res);
});

async function createRestaurant(restaurant, res){
    const result = await restaurant.save();
    console.log(result);
    res.send(restaurant);
}

app.put('/api/restaurants/:id',(req,res)=>{
    const result = validateRestaurant(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    updateRestaurant(res, req.params.id, req.body.name, req.body.address, req.body.priceRange, req.body.specialties, req.body.rating, req.body.hours);
});

async function updateRestaurant(res, id, name, address, priceRange, specialties, rating, hours){
    const result = await Restaurant.updateOne({_id:id},{
        $set:{
            name:name,
            address:address,
            priceRange:priceRange,
            specialties:specialties,
            rating:rating,
            hours:hours
        }
    })

    res.send(result);
}

app.delete('/api/restaurants/:id',(req,res)=>{
    removeRestaurant(res,req.params.id);
});

async function removeRestaurant(res,id){
    const restaurant = await Restaurant.findByIdAndRemove(id);
    res.send(restaurant);
}

function validateRestaurant(restaurant){
    const schema = {
        name:Joi.string().min(3).required(),
        address:Joi.string().min(3).required(),
        priceRange:Joi.string().min(3).required(),
        specialties:Joi.array().items(Joi.string()),
        //specialties:Joi.string().min(3).required(),
        rating:Joi.number().min(1).required(),
        hours:Joi.string().min(3).required()
    };

    return Joi.validate(restaurant,schema);
}

app.listen(3000, ()=>{
    console.log("listening on port 3000");
})