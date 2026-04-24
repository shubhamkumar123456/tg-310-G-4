import express from 'express' ;
const app = express();
const port = 8090;
import { User, Posts,db } from './firebase.js';
import { getDocs,addDoc, updateDoc, deleteDoc, where, query, doc } from 'firebase/firestore';

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('welcome page')
})

app.post('/register', async(req, res)=>{
    const {name, email, password} = req.body;

    let q = query(User, where('email', '==', email))

    let querySnapShot =await getDocs(q);
    if(querySnapShot.size >0){
        return res.status(401).json({msg:"user already registered"})
    }

    let user = await addDoc(User, {name, email, password});
    return res.json({msg:"user saved successfully"})

})



app.listen(port, ()=>{
    console.log( `server is running on port ${port}`)
})