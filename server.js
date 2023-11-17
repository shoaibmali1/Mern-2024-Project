const express = require("express");
const app = express();
const router = require("./Router/auth_router")
const port = 5000;


app.use("/api/auth", router);

app.listen(port, () =>{
    console.log(`Server is Listening at Port: ${port}`);
});