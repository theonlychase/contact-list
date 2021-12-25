export interface Contact {
  firstName: string;
  lastName: string;
  email: string;
}

export type SortOptions = Array<'First Name' | 'Last Name' | 'Email'>;

interface ErrorValidation {
  error: string;
}

export interface Validation {
  firstName: ErrorValidation;
  lastName: ErrorValidation;
  email: ErrorValidation;
}
