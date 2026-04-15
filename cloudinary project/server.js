import express from 'express';
const app = express();
const port = 8090;
import cors from 'cors';
import { cloudinary, upload } from './multer.js';

app.use(cors());
app.use(express.json())

app.get('/', (req,res)=>{
    res.send("welcome page");
})

app.post('/uploads', upload.single('file'), (req,res)=>{
    try {
        res.json({msg:"file uploaded successfully", data:req.file})
    } catch (error) {
        res.json({error:error.message})
    }
})

app.delete('/delete',async(req,res)=>{
    const {filename} = req.body;
    try {
        let ans = await cloudinary.uploader.destroy(filename);
        
        res.json({msg:"deleted successfully"})
    } catch (error) {
        res.json({error:error.message})
    }
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})