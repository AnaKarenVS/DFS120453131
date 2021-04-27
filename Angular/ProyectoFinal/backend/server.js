let express  = require('express'); //servidor 
let path = require('path');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let cors =  require('cors');

dbConfig = require('../backend/database/db');

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db,
    {
        userNewUrlParser:true
    }).then(()=>{
    console.log("Succesfully Conection");
},
error=>{
    console.log("Wrong Conection");
});

const userRoute = require ('../backend/routes/user.route');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : false
}));

app.use(cors);

app.use(express.static(path.join(__dirname, 'dist/mean-stack-crud-app'))); 
app.use('/', express.static(path.join(__dirname, 'dist/mean-stack-crud-app')));

app.use('/api',userRoute);

const port = process.env.PORT || 3000;

const server = app.listen(port, ()=>{
    console.log("Servidor Levantado", + port);

});