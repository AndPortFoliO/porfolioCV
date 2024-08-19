
// GET /comments - list all comments
// POST /comments - Create a new comment 
// GET /comments/:id - Get one comment (using ID)
// PATCH /comments/:id - Update one comment
// DELETE /comments/:id - Destroy one comment

const express = require('express');
const app = express();

const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const {v4: uuid} = require('uuid');


app.listen('3000',()=> console.log("live port"))

app.get('/comments', (req, res) => {
    res.render('commentAll.ejs',{comments});
})

app.get('/comments/new',(req,res) =>{
    res.render("newPosts")
})


app.use(express.urlencoded({extended:true}))
app.post('/comments',(req,res)=>{
    const {username, comment} = req.body;
    comments.push( {username, comment, id: uuid()} );
    res.redirect(`/comments`)
})

app.get('/comments/:id',(req,res)=>{
    const id = req.params.id;
    const comment = comments.find(elements =>elements.id == id)
    res.render('showComment.ejs', {comment})
})

app.patch('/comments/:id', (req,res)=>{

})


// Our fake database:
let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]