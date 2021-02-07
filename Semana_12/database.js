const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/crud',{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>{   
    console.log("Mongo Corriendo");
});