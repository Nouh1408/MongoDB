import {connectDB} from './db/connection.js'
function bootstrap(app,express){
    connectDB()
}
export default bootstrap