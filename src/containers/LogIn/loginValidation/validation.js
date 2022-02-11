export const inputValidation = (email,password) =>{
    const regex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    let errorMassage={}
    let isEmailNotValid = !regex.test(email) || email.length<6  || !email.length;
    let isPasswordNotValid = password.length < 3  || !password.length;
    
    if(isEmailNotValid){
        errorMassage.emailError = "Invalid Email!"
    }
    if(isPasswordNotValid){
        errorMassage.passwordError = "Invalid Password!"
    }
    return errorMassage
}