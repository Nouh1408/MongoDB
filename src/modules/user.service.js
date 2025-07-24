import { User } from "../db/models/user.model.js"

export const createUser = async (req,res)=>{
    //get data from request, check for existence, create user
   const userExist = await User.findOne({email:req.body.email})
}
export const getAllUSers=(req,res)=>{

}
export const updateUser=(req,res)=>{

}