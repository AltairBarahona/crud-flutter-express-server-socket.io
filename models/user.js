const { v4: uuidv4}= require('uuid');

class User{
    constructor(name='no-name'){
        this.id=uuidv4();
        this.name=name;
        this.secondName=this.secondName;
    }
}

module.exports=User;