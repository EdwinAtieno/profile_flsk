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