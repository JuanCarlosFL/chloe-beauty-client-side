import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema: ValidationSchema = {
  field: {
    username: [Validators.required],
    password: [Validators.required],
    repeatPassword: [Validators.required]
  },
};

export const formValidation = createFormikValidation(validationSchema);
