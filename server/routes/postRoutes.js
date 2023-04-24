




import express from 'express';

import * as dotenv from 'dotenv';

import { v2 as cloudinary } from 'cloudinary';


import Post from '../mongodb/models/post.js'

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const router = express.Router();


//! GET ALL POST

router.route('/').get(async (req, res) => {
    try {
        const posts = await Post.find({});

        res.status(200).json({ success: true, data: posts })

    } catch (error) {
        res.status(500).json({ success: false, message: error })

    }

});

// ! CREATE POST

router.route('/').post(async(req, res) => {

    try {
        const { name, prompt, photo } = req.body;
        // console.log(photo);
        
        const photoUrl = await cloudinary.uploader.upload(photo);
        
        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl.url
        })

        res.status(201).json({ success: true, data: newPost });
        
        
    } catch (error) {
        // console.log(error);
        
        res.status(500).json({ success: false, message: "Yeh kya ho rha hai" + error })

    }
})




export default router;