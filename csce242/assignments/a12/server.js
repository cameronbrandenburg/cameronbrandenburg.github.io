  
const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.static("public"));
app.use(express.json());

let foods = [
    {id:1, name:"Apple", calories:"95", protein:"0.3", carbs:"13.8", fat:"0.2"},
    {id:2, name:"Banana", calories:"89", protein:"1.1", carbs:"22.8", fat:"0.3"},
    {id:3, name:"Almonds", calories:"164", protein:"6.0", carbs:"6.1", fat:"14.2"},
    {id:4, name:"Celery", calories:"14.1", protein:"0.7", carbs:"3.0", fat:"0.2"},
    {id:5, name:"Strawberries", calories:"53", protein:"1.1", carbs:"12.7", fat:"0.0"},
    {id:6, name:"Peanut Butter", calories:"190", protein:"7.0", carbs:"8.0", fat:"16.0"}
];

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/foods', (req,res)=>{
    res.send(foods);
});

app.get('/api/foods/:id',(req,res)=>{
    const food = foods.find(r => r.id === parseInt(req.params.id));

    if(!food) res.status(404).send("The food with the given id was not found");

    res.send(food);
});

app.post('/api/foods', (req,res)=>{
    const result = validateFood(req.body);
    
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    
    const food = {
        id:foods.length+1,
        name:req.body.name,
        calories:req.body.calories,
        protein:req.body.protein,
        carbs:req.body.carbs,
        fat:req.body.fat
    };
    foods.push(food);
    res.send(food);
});

app.put('/api/foods/:id',(req,res)=>{
    const food = foods.find(r=>r.id === parseInt(req.params.id));
    
    if(!food) res.status(404).send("Food with given id was not found");

    const result = validateFood(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    food.name = req.body.name;
    food.calories = req.body.calories;
    food.protein = req.body.protein;
    food.carbs = req.body.carbs;
    food.fat = req.body.fat;
    res.send(food);
});

app.delete('/api/foods/:id',(req,res)=>{
    const food = foods.find(r=>r.id===parseInt(req.params.id));

    if(!food){
        req.status(404).send("This food with the given id was not found");
    }

    const index = foods.indexOf(food);
    foods.splice(index,1);

    res.send(food);
});

function validateFood(food){
    const schema = {
        name:Joi.string().min(1).required(),
        calories:Joi.string().min(1).required(),
        protein:Joi.string().min(1).required(),
        carbs:Joi.string().min(1).required(),
        fat:Joi.string().min(1).required()
    };

    return Joi.validate(food,schema);
}

app.listen(3000, ()=>{
    console.log("listening on port 3000");
})