

// CbvOOS3snOyRclKM
// sadikhasan13255


// mongodb+srv://sadikhasan13255:<password>@cluster0.3w6tjwf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require("express")
const ObjectId = require("mongodb").ObjectId;
require('dotenv').config();
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();
app.use(cors())
app.use(express.json())

// const uri = "mongodb+srv://sadikhasan13255:CbvOOS3snOyRclKM@cluster0.3w6tjwf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });



async function run(){
    try{

    }finally{
        // await client.close()
    }
}




  run().catch(console.dir)

app.get('/', (req, res) => {
    res.send("Winter Rescue BD");
});

app.listen(port, () => {
    console.log("runnning online on port", port);
});