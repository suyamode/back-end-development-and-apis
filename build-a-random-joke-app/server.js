const express=require('express');
const app=express();
app.use(express.json());
const jokes=[
    'How do java developers get rich? They inherit',
    'Why did the sql sit alone? Because he can not join tables',
    'I told my computer I needed a break, and it said "No problem, I’ll go to sleep."',
  'Why do Java developers wear glasses? Because they don’t see sharp.'
]
app.get('/about',(req,res)=>{
    res.json("This joke was built in express")
});
app.get('/jokes',(req,res)=>{
     const rand=Math.floor(Math.random()*jokes.length);
     res.send(jokes[rand]);
})
app.listen(3000,()=>{
    console.log('Server started listening to http://localhost:3000');
})