import { Schema, model } from "mongoose";

const projectSchema = new Schema({
    
    // user:{
    //     type : Schema.Types.ObjectId,
    //     ref : "Signup",
    //     required : true,
    // },
    projectname : {
        type :String,
        required : true,
    }
    
    
},
{
    timestamps: true,
}

);

const Project = model('Project', projectSchema);


export default Project ;