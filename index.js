const express=require('express');
const app=express();
const port=4000;

app.get('/',(req,res)=>{
    res.send('first nodejs server');
});
app.listen(port,()=>{
    console.log(`server is listning on http://localhost:${port}`);
})