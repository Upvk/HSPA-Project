import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function matchingpassword(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { notMatched: true };
  };
}
