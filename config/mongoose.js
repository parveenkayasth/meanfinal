const mongoose = require("mongoose");
const config = require("./config");
mongoose.connect(config.DB_PATH, {useNewUrlParser: true});
mongoose.connection.on("error",(error)=>{
    console.log(`DB Connection error: ${error}`);
}); 
mongoose.connection.on('connected', function(){
    console.log("DB is connected");
});

mongoose.connection.on('disconnected', function(){
    console.log("DB is disconnected");
});

