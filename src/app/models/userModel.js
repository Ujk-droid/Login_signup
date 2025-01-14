
import mongoose  from "mongoose";


const userSchema = new mongoose.Schema({
    userName: { type: String,
        required:[true,"please required userName"],
        unique:true,
    },
    email: { type: String,
        required:[true,"provide your email"],
        unique:true,
    },
    password: { type: String,
        required:[true,"please provide your password"],
    },
    isVarified: { type:Boolean,
        default:false
    },
    isAdmin: { type:Boolean,
        default:false
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    VerifyToken:String,
    verifyTokenExpiry:Date,

})

const User =mongoose.models.users || mongoose.model
("users",userSchema)

export default User