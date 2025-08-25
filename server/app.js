import express from "express";

const app = express();

app.use(express.json()) // This line imp for post,put,delete apis

const PORT = 5003;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/global",(req,res)=>{
  res.send("Hello Global")
})

app.get("/global",(req,res)=>{
  res.send("Hello Students")
})

app.post("/register",(req,res)=>{
    let userData = req.body
    console.log(userData)
    // res.json(userData)
    // // or
    res.json({msg:"user registered successfully"})
})

// app.post("/students/22U61A0577",(req,res)=>{
//   res.send("Hello Rahman")
// })
// app.post("/students/22U61A0578",(req,res)=>{
//   res.send("Hello Aakash")
// })

// req.params

app.delete("/global",(req,res)=>{
  let userData = req.body
    console.log(userData)
  res.json({msg:"user registered successfully"})
})

app.put("/world",(req,res)=>{
  let userData = req.body
    console.log(userData)
  res.json({msg:"user registered successfully"})
})

app.get("/country",(req,res)=>{
  let userData = req.body
    console.log(userData)
  res.json({msg:"user registered successfully"})
})


app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})