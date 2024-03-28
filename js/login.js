let username = document.getElementById('username')
let password = document.getElementById('password')
let sign_in = document.getElementById('sign_in')

let getUsername = localStorage.getItem("username") //to get data from local storage
let getPassword = localStorage.getItem("password")

sign_in.addEventListener("click", (e)=>{
    e.preventDefault() //this to stop refresh the page after click siginup/ or after submit, so we should do it when we use submit or forms
    if(username.value === "" || password.value ===""){
        alert("يسطا دخل البيانات")
    }else{
        if(getUsername && getUsername.trim() === username.value.trim() && getPassword.trim() === password.value.trim()){
            username.style.border = "none"
            password.style.border = "none"

            setTimeout(()=>{
                
                window.location = "index.html"
                alert(`welcome ${getUsername}`)
            }, 1000)
        }else if(username.value !== getUsername.trim()){
            username.value = ""
            username.style.border = "2px solid red"
            username.setAttribute("placeholder", "user name not existed!")
            username.classList.add('ph')
        } else {
            alert("غلط!! اخلع يالا من هنا")
            password.value = ""
            password.setAttribute("placeholder", "password isn't correct")
            password.classList.add('ph')
            password.style.border = "2px solid red"


        }
    }
})