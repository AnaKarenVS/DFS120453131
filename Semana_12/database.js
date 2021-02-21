const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Crud',{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>{   
    console.log("Mongo Corriendo");
});