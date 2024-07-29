import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class customValidator {

    static passwordValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {

            const value = control.value;
            if (!value) {
                return null;
            }
            const hasNumber = /[0-9]/.test(value);
            const hasUpper = /[A-Z]/.test(value);
            const hasLower = /[a-z]/.test(value);
            const isValidLength = value.length >= 8;
            const isValid = hasNumber && hasUpper && hasLower && isValidLength;
            return !isValid ? { passwordStrength: true } : null;
        }
    }
    static matchPassword(control: AbstractControl): ValidationErrors | null {
       
            const password = control.get('password')?.value;
            const retypePassword = control.get('retypePassword')?.value;
            if (password !== retypePassword) {
                return { matchPasswords: true };
            }
            return null;
        
    }
}