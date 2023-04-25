



import express from  'express';

import * as dotenv from 'dotenv';

import cors from 'cors';

dotenv.config();

import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoute.js'

import connectDB from './mongodb/connect.js';
const port  = process.env.PORT || 8080
const app = express();
app.use(cors());

app.use(express.json({limit:'50mb'}));

app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

app.get('/',async(req,res)=>{
    res.send("hello from DALL E")
})


const Startserver = async () => {

    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(port,()=>{
            console.log('server has started on port 8080');
        })
        
    } catch (error) {
        console.log(error);
        
    }

}


Startserver()