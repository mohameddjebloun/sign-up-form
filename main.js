//Query select the submit button
const submitButton = document.querySelector("button");
//Query select the password and confirm password elements
const pwd = document.getElementById("password");
const confirmPwd = document.getElementById("confirmPassword");
//Call matchPasswords
matchPasswords();
//Create the function matchPasswords that adds a click event listener to the submit button
function matchPasswords(){
    submitButton.addEventListener("click",()=>{
        //If the value of confirmPwd is different from the value of pwd then alert an error
        if(pwd.value!= confirmPwd.value){
            alert("Passwods do not match");
        }
    })
}
