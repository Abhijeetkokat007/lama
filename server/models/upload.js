import { Schema, model } from "mongoose";

const uploadSchema = new Schema({
    
    user:{
        type : Schema.Types.ObjectId,
        ref : 'userSignup',
        required : true,
    },
    projectone: {
        type : Schema.Types.ObjectId,
        ref : 'Project',
        required : true,
    },
    name : {
        type :String,
        required : true,
    },
    link : {
        type :String,
        required : true,
    },
    status: {
        type: String,
        default: "Done"
    }

},
{
    timestamps: true,
}

);

const Upload = model('Upload', uploadSchema);


export default Upload ;