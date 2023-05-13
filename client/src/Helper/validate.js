import { toast } from "react-hot-toast";

// validate login page username
export async function usernameValidate(values){
    const errors = usernameVerify({},values);
    return errors;
}


// validate username
function usernameVerify(error ={},values){
    if(!values.username){
        error.username = toast.error('Username is required ...!');
    }
    // else if(values.username.includes(" ")){
    //     error.username = toast.loading('Invalid Username ..! ');
        
    // }
    return error;
}
// ******************************************************************************************************
// validate passwords
export async function passwordsValidate(values){
    const errors = passwordsVerify({},values);
    return errors;
}

// Verify passward
function passwordsVerify(errors={},values){
    
    const specialChars= /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password){
        errors.password = toast.error("Password Required...!");
    } 

    else if(values.password.includes(" ")){
        errors.password = toast.error("Wrong Password...!");
    }

    else if(values.password.length < 8){
        errors.password=toast.error('Password must be at least 8 characters long...!');
    }

    else if(!specialChars.test(values.password)){
        errors.password=toast.error('Password must contain at least one special character...!'); 
    }

    return errors;
    
}

// ******************************************************************************************************
//validate reset pass word
export async function resetPasswordValidate(values){
    const errors = passwordsVerify({},values);
    if(values.password !==values.confirm_password){
        errors.exist = toast.error('Password and Confirm Password must match...!');
    }
    return errors;
}

// // ******************************************************************************************************
// validate register form
export async function registerValidation(values){
    const errors =usernameVerify({},values);
    passwordsVerify({},values);
    emailVerify({},values);
    return errors;

}

// ******************************************************************************************************
function emailVerify(errors ={},values){
    if(!values.email){
        errors.email = toast.error('Email is required...!');
    }
    else if(values.email.includes(" ")){
        errors.email = toast.error('Wrong Email..! ');
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = toast.error('Invalid Email.....! ');
    }

    return errors;
}

// ******************************************************************************************************
function PhoneNumberverify(errors ={},values){

    const specialChars= /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.mobile){
        errors.mobile = toast.error('Phone number is required...!');
    }
    else if(values.mobile.length < 10){
        errors.mobile=toast.error('Phone number must be at 10 numbers long...!');
    }
    else if(specialChars.test(values.mobile)){
        errors.mobile = toast.error('Phone Number haven`t special character.....! ');
    }

    return errors;
}

export async function PhoneNumberValidate(values){
    const errors = PhoneNumberverify({},values);
    return errors;
}


// ******************************************************************************************************
// validate profile page
export async function profileValidation(values){
    const errors = emailVerify({},values);
    PhoneNumberverify({},values);
    return errors;
}


