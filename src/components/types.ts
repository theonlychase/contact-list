export interface Contact {
  firstName: string;
  lastName: string;
  email: string;
}

export interface ErrorValidation {
  error: string;
}

export interface Validation {
  firstName: ErrorValidation;
  lastName: ErrorValidation;
  email: ErrorValidation;
}


