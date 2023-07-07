const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const logger = require("morgan");

// madlewares
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname + "/views"));

app.use(logger('dev'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//connect to database
mongoose.connect("mongodb+srv://ahmedandhossam2010:0787142531312@cluster0.vgqlzjw.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("done connect to database")).catch(err => console.log('error in database:' + err));


// pages
app.get('/', (req, res) => {
const DataCars = require("./models/cars");
DataCars.find({}).then(cars => {
  cars.forEach((e) => {
    res.render("home",{
        e:e
    })
    
  })
}) 

    
})

app.post("/", (req, res) => {
    if(req.body.search)
    {
        const DataCars = require("./models/cars");
DataCars.find({})
.then(car => {
    car.forEach(ca => {
        ca.cars.forEach(c => {
            if(c.name.startsWith(req.body.search)) {
                res.render("home1",{
                 e:c   
                })
            } else if(c.number.startsWith(req.body.search))
            {
                res.render("home1",{
                    e:c   
                   })
            }
        })
    })
})


    }
})



//listen
app.listen(3000, () => {
    console.log('done connect to server')
})