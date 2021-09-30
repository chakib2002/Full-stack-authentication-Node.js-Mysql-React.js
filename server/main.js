const {get_username, add_user} = require('./API/login_queries');
const {Valid} =require('./validating_requests/validating_type')
const {MaxChar}= require('./validating_requests/validating_fields')
const {register}= require('./validating_requests/formats')
const {sessionStore} = require('./Database_config/DB_session')
const passport = require('./passport_JS/passport_config')
const bcrypt = require('bcrypt')
const Passport = require ('passport')

const express = require('express')
const cors =require('cors');
const session = require('express-session');
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use(cors({
    origin : "http://localhost:3000",
    methods : ["POST", "GET"],
    credentials : true
}))
app.use(session({
    key : "userId",
    secret: 'FCcBC&Bio2MM',
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
        maxAge: null,
    }
}))



app.use(Passport.initialize())
app.use(Passport.session())

app.use((req,res,next) =>{
    console.log(req.session)
    console.log(req.user)
    next()
 })



app.post('/register', async(req, res, next)=>{
    const user = await get_username(req.body.username)
    if(user){
        res.status(200).send({message : "Username already exist"})
    }else{
        bcrypt.hash(req.body.password,10 ,async(err, result)=>{
            if(err){
                res.send(200).send({message : "An error has occured, please register again"})
            }else{
                if(Valid(register,req.body) && MaxChar(45,[req.body.first_name,
                                                            req.body.last_name,
                                                            req.body.phone_number,
                                                            req.body.email,
                                                            req.body.username])){
                    await add_user (req.body.username,
                                    req.body.first_name,
                                    req.body.last_name,
                                    req.body.email,
                                    req.body.phone_number,
                                    result
                                    )
                .then(()=>{res.status(200).send({message : "user registered successfully"})})
                .catch(()=>{res.status(200).send({message : "An error has occured, please register again"})})
                }else{
                    res.status(200).send({message : "Invalid Input"})
                }
            }
        })

    }
})

app.post('/login', 
    passport.authenticate('local',{
                                failureRedirect :'/failure',
                                successRedirect:'/success'
                            }))

app.get('/gone', (req, res, next)=>{
    res.status(200).send({loggedIn : false})
})

app.get('/success', (req, res, next)=>{
    res.status(200).send({loggedIn : true})
})

app.get('/failure', (req, res, next)=>{
    res.status(200).send({loggedIn : false})
})
app.get('/logout',(req, res, next) => {
    req.logOut()
    res.redirect('/gone')
});

app.get('/login', (req, res, next)=>{
    if(req.user){
        res.status(200).send({loggedIn : true})
    }else{
        res.status(200).send({loggedIn : false})
    }
})




const PORT = 3001;
app.listen(PORT ,
    ()=>console.log(`server listening on port ${PORT}.`)
    )