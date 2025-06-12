import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connect_db from './db/db.js';
import routes from './routes/index.js'

dotenv.config()

const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json())
app.use('/api',routes)

connect_db().then(()=>{
  console.log('Database Connected');
  app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
  })
}).catch((error)=>{
  console.log('ERROR occured !!',error)
})


 












      