let express = require("express");
let socket = require("socket.io");

let app = express();
let port = 3500
let server = app.listen(port, function(){
    console.log("Server is started on port " + port)
})

app.use(express.static("public"));


let io = socket(server);
io.on("connection", (socket) => {
    console.log("Made socket connection ", socket.id)

    socket.on("message", (data) => {
        io.sockets.emit('message', data);
    });

    socket.on("typing", (data) => {
        socket.broadcast.emit('typing', data);
    });
})
