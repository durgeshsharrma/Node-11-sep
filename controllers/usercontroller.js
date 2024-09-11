const users = require("../user.json");




//get all users
function getAllUsers(req , res) {
    try{
         res.send(users);


    }
    catch(err){
        console.log(err);
    }
}


//Show route of the user
function getUser(req , res){
    try{

        let id = parseInt(req.params.id);
        let user  = users.find((singleUser) => 
            singleUser.id === id);
        res.json(user);


   }
   catch(err){
       console.log(err);
   }
}




module.exports = {
    getAllUsers,
    getUser
}