/**
 * Created by Zida on 2015/3/21.
 */

module.exports = function(io, socket){
    io.emit('chatMessage', {
        type: 'status',
        text: 'connected',
        created: Date.now(),
        username: socket.request.user.username
    });

    socket.on('chatMessage', function(message){
        message.type = 'message';
        message.created = Date.now();
        message.username = socket.request.user.username;
        console.log(message);

        io.emit('chatMessage', message);
    });

    socket.on('disconnect', function(message){
        io.emit('chatMessage', {
            type: 'status',
            text: 'disconnected',
            created: Date.now(),
            username: socket.request.user.username
        });
    });
};