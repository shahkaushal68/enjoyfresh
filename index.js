const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const { Sequelize } = require('sequelize');
const db = require("./models");
const app = express();

//default middleware
app.use(express.json({ extended: true })); //for Json data from Postman
app.use(express.urlencoded({ extended: true })); // for Form data 
app.use(cors()); ///for Connect thirs-party url

//defining Port
const port = process.env.PORT || 4000;


//Db Connection - Using config.json

// const sequelize = new Sequelize('enjoyfresh-practice', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

// sequelize.authenticate()
//     .then(console.log('Connection has been established successfully.'))
//     .catch((error) => console.error('Unable to connect to the database:', error));


// Synchronizing
//db.sequelize.sync({ force: true });
//db.sequelize.sync({ alter: true });
//db.Country.sync({ force: true });
//db.State.sync({ force: true });
//db.City.sync({ force: true });
//db.ZipCode.sync({ force: true });
//db.FoodSeller.sync({ force: true });
//db.BusinessLocation.sync({ force: true });


//Routing 
app.use("/api", require("./routes"));


app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Defining Port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});