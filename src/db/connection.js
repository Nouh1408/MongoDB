import { MongoClient } from "mongodb";
const client = new MongoClient("mongodb://127.0.0.1:27017");

export const db =client.db("football") //db.users for example
export function connectDB(){
    
client.connect().then(()=>{
    console.log("Db connected successfully");
    
}).catch((err)=>{
    console.log("failed becaue: ",err);
    
});
}
