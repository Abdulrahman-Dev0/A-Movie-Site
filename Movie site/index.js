



// Js is the programming lang for the site but actually its not alott or anything! 
let admin = false ;
let booked = false ;
let emails = [] ;
let passs = [] ;
// Login(admin)...
function signup() {
    let email = document.getElementById("email").value ;
    let pass = document.getElementById("pass").value ;
    if (email == "Admin" && pass == "admin"){  
        location="main.html" ;
        let admin = true ;
    } //Signup...
    else if(email.trim()== "" || pass.trim()== ""){
        alert("Fill The All Requirements") 
    }
    else{
        
        emails.push(email) ;
        passs.push(pass) ;
        alert("Welcome " + email + " !") ;
        location="main.html" ;
        setTimeout(() => {
            let username = document.getElementById("title").textContent ;
            username="Welcome "+email + " To Muvi Cinema !" ;
        },1000)
        
    }

}



//Logout:

function logout(){
    location="index.html"
}