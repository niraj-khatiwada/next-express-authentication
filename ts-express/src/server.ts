import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())


const ALLOWED_ORIGINS = ["http://localhost:3000", "http://localhost:3001"]

app.use(cors({
    credentials: true,
    origin:function(origin, callback){
        if( origin==null || ALLOWED_ORIGINS.indexOf(origin) !==-1){
            return callback(null, true)
        }
        return callback(new Error("Blocked by CORS"))
    },
}))

app.post("/login", function(req, res, next){
    console.log("Login requested", req.body, req.originalUrl)

    // encrypt the payload
    // httpOnly cookie cannot be tampered in frontend
    res.cookie("COOKIE_KEY", "ENCRYPTED_JWT",{httpOnly:true, maxAge: 7*24*60*60})

    return res.status(200).json({
        success: true
    })

})


const PORT = 3000
app.listen(PORT, function(){
    console.log(`Server started at port ${PORT}`)
})


