const express = require('express');
const app=express();

const morgan = require('morgan');

//settings
app.set('port', 3000);

//middelware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use(require('./routes/movies'));





//empezando servidor
app.listen(3000, ()=>{
    console.log(`Server on port ${app.get("port")}`);
})