import { Schema, model } from "mongoose";


const userschema = new Schema({
    name: {
        type: String,
        default: 'user',
       
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    mobile: {
        type: String,
        require: true,
    },
    
    password: {
        type: String,
        require: true
    },
   
},
    {
        timestamps: true,
    }
)

const Signup  = model('Signup', userschema)

export default Signup;