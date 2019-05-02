const socket = io.connect('http://localhost:3500');

const message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      feedback = document.getElementById('feedback');

btn.addEventListener('click', function(){
    socket.emit('message', {
        message: message.value,
        handle: handle.value
    });
    message.value = "";
});

message.addEventListener('keydown', function(){
    socket.emit('typing', handle.value);
});

// message.addEventListener("keyup", function(){

// })

socket.on('message', function(data){
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
    setTimeout(()=>{
        feedback.innerHTML = ""
    }, 3000) 
});