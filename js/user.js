
let userInfo = document.getElementById('user_info')

let signin_sigup = document.getElementById('link')

let userData = document.getElementById('user')

if(localStorage.getItem("username")){ //to check if there is data of userName in local storage
    signin_sigup.remove() // to remove sign in & sign up 
    userInfo.style.display = 'flex'
    userInfo.style.fontSize = '30px'
    userData.innerHTML = `welcome ${localStorage.getItem("username")}`
}
//log out and clear data
let logOut = document.querySelector('#LogOut')
logOut.addEventListener("click", function(){
    localStorage.clear()
    setTimeout(()=>{
        window.location = "login.html"
    }, 1000)
})