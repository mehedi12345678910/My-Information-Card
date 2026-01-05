const express = require('express')
const cors=require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = process.env.PORT || 3000

// middleware
app.use(cors());
app.use(express.json());
// cardCreate
// fgiA4aWY23AhmTJB
const uri = "mongodb+srv://cardCreate:fgiA4aWY23AhmTJB@cluster0.1ejwnc7.mongodb.net/?appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.get('/', (req, res) => {
  res.send('Backend running...!') 
})

async function run() {
  try {
    await client.connect();
    //  

    const userPost=client.db('userPost');
    const userCollection=userPost.collection('users')

    app.get('/users',async(req,res)=>{
      const cursor=userCollection.find();
      const result = await cursor.toArray();
      res.send(result)
    })
    app.get('/users/:id',async(req,res)=>{
      const id=req.params.id;
      console.log('need user with id ',id);
      const query={_id:new ObjectId(id)}
      result=await userCollection.findOne(query)
      res.send(result)
    })

    // add database related apis here 1
    app.post('/users',async(req,res)=>{
      const newUser=req.body
      console.log('user info',newUser)
      const result=await userCollection.insertOne(newUser);
      res.send(result)
    })

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})