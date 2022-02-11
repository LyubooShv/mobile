export const inputValidation = (userCredentials) =>{
    const regex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    const { email, password, firstName, lastName } = userCredentials;
    let errorMassage={}
    let isEmailNotValid = !regex.test(email) || email.length < 6  || !email.length;
    let isPasswordNotValid = password.length < 3  || !password.length;
    let firstNameIsEmpty =  !firstName.length;
    let lastNameIsEmpty =  !lastName.length

    
    if(isEmailNotValid){
        errorMassage.emailError = "Invalid Email!"
    }
    if(isPasswordNotValid){
        errorMassage.passwordError = "Invalid Password!"
    }
    if(firstNameIsEmpty){
        errorMassage.firstNameError = "Empty field!"
    }
    if(lastNameIsEmpty){
        errorMassage.lastNameError = "Empty field!"
    }
    return errorMassage
}