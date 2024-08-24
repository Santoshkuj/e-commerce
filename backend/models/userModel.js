import {Schema,model} from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique : true
    },
    password:{
        type:String
    },
    cartData:{
        type:Object,
        default : {}
    },
    date:{
        type:Date,
        default: Date.now
    }
},{
    minimize:false
})

userSchema.pre('save',async function (next) {
    if (!this.isModified('password')) {
        return next()
    }
    let salt =await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt);
    next()
})

userSchema.methods = {
    comparePassword : async function (userPassword) {
        return await bcrypt.compare(userPassword,this.password)
    }
}
const userModel = model('user',userSchema);

export default userModel;