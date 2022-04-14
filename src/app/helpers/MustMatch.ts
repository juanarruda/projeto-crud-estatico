import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';


export const MustMatch: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const senha = control.get('senha');
  const confirmarSenha = control.get('confirmarSenha');

  return senha?.value === confirmarSenha?.value ? null : { notmatched: true };
};

