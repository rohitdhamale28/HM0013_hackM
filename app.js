
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");//for express sessions, But it only for local projects and not production
const MongoStore= require("connect-mongo");//this is used for production enviornment
const flash = require("connect-flash");
const wrapAsync = require("./utils/wrapAsync.js");


const passport = require("passport");
const localStratergy = require("passport-local");
const User= require("./models/user.js");

const store= MongoStore.create({
  mongoUrl: "",
  crypto: {
    secret:"jabvkjabn",
  },
  touchAfter: 24*60*60,//seesion time in sessions
});

store.on("error", ()=>{
  console.log("Error in MONGO SESSION STORE", err);
})


const sessionOptions= { 
  store,
    secret:"jabvkjabn",
  resave: false, 
  saveUninitialized: true,
  cookie:{
    expires: Date.now() +7*24*60*60*1000,//here we have set expiry time in milliseconds
    maxAge: 7*24*60*60*1000,//
    httpOnly: true,
  }, };
  


// all the courses route are stored in this file
const courses= require("./routes/course.js");

// all the courses route are stored in this file
const reviews= require("./routes/review.js");

// all the courses route are stored in this file
const users= require("./routes/user.js");

const {reviewSchema}=require("./joi.js");
const ejsMate = require('ejs-mate');
const Contact = require("./models/contact.js");
app.engine('ejs', ejsMate);
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));



main()
  .then(() => {
    console.log("connection successful")
  })
  .catch((err) => console.log(err));

// used to form a connection
async function main() {
// this is to connect with local 
  await mongoose.connect("mongodb://127.0.0.1:27017/eduhub");
// this is to connect with Mongodb Atlas 
  // await mongoose.connect(dbURL);
 //( mongodb+srv://rohitdhamale05:<password>@cluster0.82ltj62.mongodb.net/)
}




app.use(session(sessionOptions));
app.use(flash());

// passort middleware
// this will intialize our password for every request
app.use(passport.initialize());
app.use(passport.session());
// we have to use this every time before using passort
passport.use(new localStratergy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());





// middleware to flash messages
app.use((req,res,next)=> {
res.locals.success= req.flash("success");
res.locals.error= req.flash("error");
res.locals.currentUser= req.user;
// console.log(req.user.type);
next();
});


app.use("/courses",courses);
app.use("/courses/:id/reviews",reviews);
app.use("/",users);


app.get("/", (req, res) => {
  res.render("home/home.ejs");
});

// about
app.get("/about", (req, res) => {
  res.render("home/about.ejs");
});

// contact
app.get("/contact", (req, res) =>{
  res.render("home/contact.ejs");
  });


app.post("/contact" ,async(req,res)=>{
  
  const newContact = new Contact(req.body.contact);
  console.log(newContact);
  await newContact.save();
  req.flash("success","Contacted");
  res.redirect("/");
});
// if the user sends a request to route which doesn't exist
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});

app.use((err, req, res, next) => {
  let { status = 500, message = "something went wrong" } = err;
  //  res.status(status).send(message);
  res.status(status).render("errors.ejs", { message });
})

app.listen("8080", (req, res) => {
  console.log("listening on port: 8080");
});
