import { reactive } from 'vue';
import { Validation } from './types';

const required = 'This field is required';
const min = 'Must have at least 2 letters';
const alpha = 'Alpha characters only';
const email = 'Must be a valid email address';
const letterRegex = /^[a-zA-Z ]*$/;
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const validationState = {
  firstName: {
    error: '',
  },
  lastName: {
    error: '',
  },
  email: {
    error: '',
  },
};

const validations: Validation = reactive({ ...validationState });

function isAlpha(key, value): boolean {
  if (!letterRegex.test(value)) {
    validations[key].error = alpha;
    return false;
  } else {
    validations[key].error = '';
    return true;
  }
}

function isRequired(key, value): void {
  if (!value) {
    validations[key].error = required;
  } else {
    validations[key].error = '';
  }
}

function minLength(key, value): void {
  if (value.length < 2) {
    validations[key].error = min;
  } else {
    validations[key].error = '';
  }
}

function validEmail(key, value): void {
  if (!emailRegex.test(value)) {
    validations[key].error = email;
  } else {
    validations[key].error = '';
  }
}

const clearValidation = (): void => {
  Object.keys(validations).forEach((key) => {
    Object.assign(validations[key], { error: '' });
  });
};

function isValidated(contact): boolean {
  Object.entries(contact).forEach(([key, value]) => {
    isRequired(key, value);

    if (key !== 'email' && value) {
      const alphaValid = isAlpha(key, value);
      alphaValid && minLength(key, value);
    }
    key === 'email' && validEmail(key, value);
  });

  return Object.keys(validations).every((key) => !validations[key].error);
}

export { clearValidation, isValidated, validations };
