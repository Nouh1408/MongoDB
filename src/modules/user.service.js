import { ObjectId } from "mongodb"
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
export const getAllUSers= async (req,res)=>{
    //const users = await User.find().toArray()
    const cursor = User.find()
    const users = []
    while(await cursor.hasNext()){
        const doc = await cursor.next()
        users.push(doc)
    }
    return res.status(200).json({message:"users found", success:true, data:users})
}
export const updateUser= async (req,res)=>{
    try {
        const {id} = req.params
        const userExist = await User.findOne({email:req.body.email, _id: {$ne:new ObjectId(id)}})
        if(userExist){
            throw Error("email already exist", {cause:409})
        }
      const {matchedCount}=await  User.updateOne({_id: new ObjectId(id)},{ $set: req.body  } )
      if(matchedCount==0){
        throw new Error("nothing updated", {cause:404})
      }
      return res.status(200).json({message:"user updated", success:true  })
    } catch (error) {
        return res.status(error.cause || 500).json({message:error.message, success:false, stack:error.stack})
    }
}