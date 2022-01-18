let body = document.querySelector('body');


function submitData(name, email) {
    
    const user = {
        name: name, 
        email: email   
    };

    const configurationObj = {
        method: "POST", 
        headers: {
            "Content-Type" : "application/json", 
            Accept: "application/json",
        }, 
        body: JSON.stringify(user)
    }; 
    
     return fetch('http://localhost:3000/users', configurationObj)
        .then(res => res.json())
        .then((data) => {
            body.append(data.id)             
        })
        .catch((error) => {
            body.append(error.message);
            })

              
    }
    submitData("Kevin", "kevin@none.com")
