const { io } = require("../index");
const User = require("../models/user");
const Users = require("../models/users");

const users= new Users();


users.addUser(new User('Altair','Barahona'));
users.addUser(new User('Altair','Barahona'));
users.addUser(new User('Altair','Barahona'));
users.addUser(new User('Altair','Barahona'));
users.addUser(new User('Altair','Barahona'));

console.log(users);

//mensajes de Sockets
io.on("connection", (client) => {
    //cliente es un host que se acaba de conectar al socket server
    console.log("cliente conectado");
    client.emit('active-users', users.getUsers());
    //client.on('event', data => { /* … */ });
    client.on("disconnect", () => {
        console.log("cliente desconectado");
    }); //dispara cuanto el host se desconecte
    /*La escucha debe ser literlamente el mismo/igual "mensaje de index.html" */
    client.on("mensaje", (payload) => {
        //payload para cargar el mensaje Altair
        console.log("Mensaje!!!", payload);

        io.emit("mensaje", { admin: "Nuevo mensaje" }); //manda mensaje a todos los clientes conectados
    });

    /*client.on("emitir-mensaje", (payload) => {
        //io.emit('nuevo-mensaje',payload);//io.emit emite a todos
        client.broadcast.emit("nuevo-mensaje", payload); //a todos menos a quien lo emite
        
    });*/

    client.on("add-user",function(payload){
        console.log(payload)
        users.addUser(new User(payload.name));
        io.emit('active-users',users.getUsers());

    });

    
    client.on('delete-user',(payload)=>{
        users.deleteUser(payload.id);
        io.emit('active-users',users.getUsers());
    });


   
});
