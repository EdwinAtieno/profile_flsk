import validator from "validator";
import BackUrl from "../BackUrl";

export function EmailCheck (email) {
    if (validator.isEmail(email)) {
        return true;
    }
    else{
        return false;
    }
  }


export function PasswordValidator (password) {
    if (password.length > 8) {
        return true
    }
    else{
        return false;
    }
  }

export function Passwordcheck (password, confirmpassword) {
    if (password===confirmpassword) {
        return true
    }
    else{
        return false;
    }
  }
