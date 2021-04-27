const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/BeerShop',{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>{   
    console.log("Mongo Corriendo");
});