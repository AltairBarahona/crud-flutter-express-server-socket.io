const User = require("./user");

class Users{

    constructor(){
        this.users=[];
    }

    addUser(user=new User()){
        this.users.push(user);
    }

    getUsers(){
        return this.users;
    }

    deleteUser(id=''){
        this.users=this.users.filter(user=>user.id!=id);
        return this.users;
    }

    // voteUser(id=''){
    //     this.User=this.Users.map(User=>{
    //         if(User.id===id){
    //             User.votes++;
    //             return User;
    //         }else{
    //             return User;
    //         }
    //     })
    // }
}

module.exports=Users;