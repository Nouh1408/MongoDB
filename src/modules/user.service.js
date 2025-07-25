import { User } from "../db/models/user.model.js"

export const createUser = async (req,res)=>{
    try {
        //get data from request, check for existence, create user
   const userExist = await User.findOne({email:req.body.email})
   if(userExist){ throw new Error("this user already exist",{cause:409})}
   const {insertedId}=await User.insertOne(req.body)
   return res.status(201).json({message:"user created successfully", success:true, data:{insertedId}})
    } catch (error) {
        return res.status(error.cause || 500).json({message:error.message, success:false, stack:error.stack})
    }
}
export const getAllUSers=(req,res)=>{

}
export const updateUser=(req,res)=>{

}