/*
    The valid function takes to argument, 
    the format object (the objects that are in the "validate_requests/formats.js" ) and the req.body
    it checks the typeof each input and compares it to the object in the format.js file.

    it return a boolean value indicating if the values in the requests have the right format in order to store them 
    in the database.
    
 */ 
    const Valid= (format,req_body)=>{

        keys=Object.keys(format)
        for (var i=0;i<keys.length;i++){
            if (typeof(req_body[keys[i]])!=="undefined"){
                    if(typeof(req_body[keys[i]])!==format[keys[i]]){
                        return(false)
                    }
            }else{
                return(false)
            }
        }
        return(true)
    
    }
    module.exports={Valid};