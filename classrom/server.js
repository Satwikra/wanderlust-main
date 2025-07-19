const express =require("express");
const app =express();
const users= require("./routes/user.js");
const posts= require("./routes/post.js");
const session =require("express-session");
const flash= require("connect-flash");
const path=require("path");
const { register } = require("module");
//design express sessions
const sessionOptions = {secret:"mysupersecretstring",resave:false,saveUninitaialized:true,
};

app.use(session(sessionOptions));
app.use(flash());

app.get("/register",(req,res)=>{
    let{name="anonymous"} = req.query;
    req.session.name=name;
    if(name === "anonymous"){
        req.flash("error,user not registered");
    }else{
            req.flash("success","user registered successfully");
        }
    req.redirect("/hello");
});
app.get("/hello",(req,res) =>{
    reslocal.successMsg= req.flash("success");
    req.locals.errorMsg = req.flash("error");
    // res.locals.messages = req.flash("success");
    res.render("page.ejs",{name:req.session.name});
});

//reequest counting


// app.get("/reqcount",(req,res)=>{
//     if(req.session.count){
//         req.session.count++;
//     }else{
//         req.session.count =1;
//     }
//     res.send(`You sent a request ${req.session.count} times`);
// });

// app.get("/test",(req,res) =>{
//     res.send("test succeessful!");
// });

// const cookieParser =require("cookie-parser");
//use the cookie-parser

// app.use(cookieParser("secretcode"));

// app.get("/getcookies",(req,res) =>{
//     res.cookie("made-in","India",{signed:true});
//     res.send("signed cookie sent");
// });

// app.get("/verify",(req,res)=>{
//     console.log(req.cookies);
//     res.send("verified");
// });


// //for sending the cookies
// app.get("/getcookies",(req,res) => {
//     res.cookie("greet","hello");
//     res.send("sent you some cookies!");
// });
// app.get("/greet",(req,res)=>{
//     let{name="anonymous"}= req.cookies;
//     res.send(`Hi,${name}`);
// });
// app.get("/",(req,res)=>{
//   console.dir(req.cookies);  
//     res.send("Hi,I am root!");
// });
// app.use("/users",users);
// app.use("/posts",posts);


app.listen(3000,() => {
    console.log("server is listening to 3000");
});