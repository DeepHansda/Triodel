const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost:27017/triodel',{
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('mongodb connected .')
}).catch((err)=>{
    console.log(err)
})

module.exports=connection;