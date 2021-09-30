/*
    the register object contains the type that each 
    input of the registration must have, 
    this object is used during the requests validation process
*/
var register = {
    "username":"string",
    "first_name": "string",
    "last_name":"string",
    "email":"string",
    "phone_number":"string",
    "password":"string"
}



module.exports={register}