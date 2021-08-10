const express = require('express');
const app=express();
const oneRoute=require('./routes/')

app.use('/api/',oneRoute)

console.log('object')



console.log("object2")

//asdfhj
console.log('2234567')



app.listen(process.env.PORT||2022,()=>{
    console.log(`server running pn port number 2022 `)
})