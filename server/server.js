const express = required("express");
const app = express();
const port = 5000;

app.get("/", (req, res) =>{
    res.status(200).send('Welcome to 1st Best Mern Project')
})

app.listen(PORT, () =>{
    console.log(`Server is Listening at Port: ${port}`);
});