const Customer = require("../../config/model/Customer")

module.exports = {
    showCustomer: async(request, response) => {
        response.status(200).json(await Customer.find());
    },

    login: async(request, response) => {
        const { username, password } = request.body
        console.log(username,password)
    
      const user = await Customer.findOne({
        username,
        password
      })
      if (user) {
        response.status(200).json(user);
      } else {
        let message = {message: 'Email or Password incorrect'}
        response.status(200).end(JSON.stringify(message));
      }
       
    },

	register: async (request, response) => {
        let {firstname, lastname,username, password,phone,email} = request.body
        if(firstname == "" || lastname == "" || username == "" || password == "" || phone == "" || email == ""){
            response.status(400).json({
                status: "FAILED",
                message: "Empty inputs fields"
            })
    
        }else if(!/^[a-zA-Z ]*$/.test(firstname) || !/^[a-zA-Z ]*$/.test(lastname)){
            response.status(400).json({
                status: "FAILED",
                message: "Invalid firstname or lastname  entered"
            })
        }else if(password.length < 8){
            response.status(400).json({
                status: "FAILED",
                message: "Password is short"
            })
    
        }else if(!/^[0][689]\d{8}/.test(phone)){
            response.status(400).json({
                status: "FAILED",
                message: "tel incorrect"
            })
    
        }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
            response.status(400).json({
                status: "FAILED",
                message: "Invalid email entered"
            })
        }else{
            let customers = new Customer(request.body)
            await customers.save(async (err,data) =>{
                if (err) response.status(400).json("Username that other User has already exist");
                response.status(200).json(data);
            })

        }




        
       
    }
        
	        
            
   
}