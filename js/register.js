let username = document.getElementById('username')
let password = document.getElementById('password')
let rePassword = document.getElementById('rePassword')
let email = document.getElementById('email')
let sign_up = document.getElementById('sign_up')
let form = document.getElementById('form')

sign_up.addEventListener("click", function(e){
    e.preventDefault() //this to stop refresh the page after click siginup/ or after submit, so we should do it when we use submit or forms
    if(username.value === "" || email.value === "" || password.value === "" || rePassword=== ""){
        alert("please fill data")
    }else if(password.value !== rePassword.value) {
        password.style.border = '2px solid red'
        rePassword.style.border = '2px solid red'
        password.value = ""
        rePassword.value = ""
        password.setAttribute("placeholder", "password is not correct")
        rePassword.setAttribute("placeholder", "password is not correct", 'red')  
        password.classList.add('ph')
        rePassword.classList.add('ph')
    }else {
        localStorage.setItem("username", username.value)// localStorage.setItem(key name ,value ) to save/push in local storage
        localStorage.setItem("password", password.value)// localStorage.getItem(key name ) to read/get data from local storage then show value
        localStorage.setItem("email", email.value)
        //to go back to login page after register data
        setTimeout(()=>{
            window.location = "login.html"
        }, 1000) // it means after register the data go to login page after 1.5sec
    }
})

