import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Signup from "./models/userSignup.js";
import Project from "./models/project.js";
import Upload from "./models/upload.js";
import path from "path";

dotenv.config()

const app = express();
app.use(express.json());
const __dirname = path.resolve();


const PORT = process.env.PORT || 5000

const connectDB = async () => {
    try{
        const connection = await mongoose.connect(process.env.MONGODB_URI)
    if (connection) {
        console.log(`mongoDB connected`)
    }
    } catch(e){
        console.log(e.message);
    }  
}

app.post("/api/signup", async (req, res) => {
    const { name, email, mobile,  password,  } = req.body;
    const newUser = new Signup({
        name,
        email,
        mobile,
        password,
    });

    try {
        const saveuser = await newUser.save();
        res.json({
            success: true,
            data: saveuser,
            message: "user created successfully."

        })
    } catch (e) {
        res.json({
            success: false,
            message: e.message
        })
    }
}) 

app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({
            success: false,
            message: "invalid email and password"
        })
    }
    const user = await Signup.findOne({
        email: email,
        password: password
    })
    if (user) {
        res.json({
            success: true,
            data: user,
            message: "login succesfull"
        })
    }
    else {
        res.json({
            success: false,

            message: "invalid data"
        })
    }
})

app.post("/api/addprojrct", async (req, res) =>{
    const {  projectname } = req.body;

    const projectobj = new Project({
        
        projectname
    })

    try {
        const savedata = await projectobj.save();
        res.status(201).json({
            success: true,
            data: savedata,
            message: "Project  saved Successfully"
        })
    } catch (e) {
       return res.json({
            success: false,
            message: e.message
        })
    }
} )
app.get("/api/all/project", async (req, res) => {
    
   try{
    const order1 = await Project.find()
  
    res.json({
      success:true,
      data:order1,
      message: "all Transaction fatch  successfully"
    });
   }
   catch(e){
    res.json({
        success:false,
        message: e.message
      });
   }
})

app.get("/api/user/project/:id", async (req, res) => {
    const {id} = req.params;
   try{
    const order1 = await Project.find({user:{ _id: id }}).populate("user")
  
    res.json({
      success:true,
      data:order1,
      message: "user Transaction fatch  successfully"
    });
   }
   catch(e){
    res.json({
        success:false,
        message: e.message
      });
   }
})

app.get("/api/project/:_id", async (req, res) => {
   
   try{
    const {_id} = req.params;
    const product1 = await Project.findById(_id);
    res.json({
        success: true,
        data: product1,
        message: `successfully find one project data. `,
    });
   }
   catch(e){
    res.json({
        success: false,
         message: e.message,
    });
   }
})

app.post("/api/project/upload", async (req, res) => {
    const { user,  projectone, name , link, status } = req.body;

    const uploadobj = new Upload({
        user,
        projectone,
        link,
        name,
        status
    })

    try {
        const savedata = await uploadobj.save();
        res.status(201).json({
            success: true,
            data: savedata,
            message: "Uploaded Succesfully"
        })
    } catch (e) {
       return res.json({
            success: false,
            message: e.message
        })
    } 
})

app.get("/api/user/project/upload/:id", async (req, res) => {
   try{
    const { id } = req.params;
    const upload = await Upload.find({ user: {_id: id}}).populate('user')
    order1.forEach((Upload)=>{
         
    })
    res.json({
      success:"true",
      data:upload,
      message: "All uploaded data fatched successfully"
    });
   }
   catch(e){
    res.json({
        success:false,
        message: e.message
      });
   }
})

app.delete("/api/project/link/:id", async (req, res) => {
    const {id} = req.params;
  
    try {
      await Upload.deleteOne({ _id: id });
      res.status(200).json({
        success: true,
        message: "link deleted successfully",
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
})

app.put("/api/productedit/link/:id", async  (req, res) => {
    const { id } = req.params;
    const { name, link, status,  } = req.body;
    await Upload.updateOne(
      { _id: id },
      {
        $set: {
          amount,
          transactionType,
          category,
          description,
        },
      }
    );
    try {
      const updateTransaction = await Transaction.findOne({ _id: id });
      return res.status(200).json({
        success: true,
        data: updateTransaction,
        message: "Link updated successfully",
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
})

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, '..', 'client', 'build'))); 
   
    app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
    });
   }


app.listen(PORT, () => {
    console.log(`server is runing ${PORT}`)
    connectDB();
})