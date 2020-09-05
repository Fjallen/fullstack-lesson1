const express = require("express");
const cors = require("cors"); //Need cors due to differnt hosts 
const port = 4000;
const app = express();
app.use(cors());

//Routing with express
app.get("/:id",(req,res)=>{
    //If user navigates to localhost:4000/Me, its a success
    if(req.params.id === "Me"){
        res.send({
            status: 'success'
        })
    }
    //Otherwise failure
    else {
        res.send({
            status: 'failure'
        })
    }
})

//Start listening on Port
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})