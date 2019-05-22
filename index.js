const app = require("./config/express");
const config = require("./config/config");
require("./config/mongoose");
const port = config.PORT;
app.listen(port,()=>{
    console.log(`Server is running at port ${port}...`);
})