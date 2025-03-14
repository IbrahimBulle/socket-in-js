const express=require("express")
const http=require("http")
const {Server} =require("socket.io")

const path =require("path")

const app =express()
const server=http.createServer(app)
const io=new Server(server)

app.use(express.static(path.join(__dirname, "public")));

io.on("connection",(socket)=>{
    console.log("A user connected");
    socket.on("message",(msg)=>{
        console.log("reseived :",msg);
        io.emit("message",msg)
    });

    socket.on("disconnect",()=>{
        console.log("user disconnected");
    });
})
server.listen(3000,()=>{
    console.log("server on http://localhost:3000");
})