import {connectDB} from './db/connection.js'
import userRouter from './modules/user.controller.js'
function bootstrap(app,express){
    connectDB()
    app.use(express.json())
    app.use('/user',userRouter)
}
export default bootstrap