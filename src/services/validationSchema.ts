import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .typeError("Will be a string")
    .email("You must enter the field in email format")
    .matches(
      /^(?!-)\S{2,}@\S+(\.\w{2,})(?!-)$/,
      "You must enter the field in email format"
    )
    .min(6, "The field contains an error")
    .max(63, "The field contains an error")
    .required("This field is required"),
  password: yup
    .string()
    .typeError("Will be a string")
    .min(6, "Password must contain at least 6 characters")
    .max(30, "Password must be less than 30 characters")
    .matches(
      /^(?!-|\.)[0-9a-zA-Z*!@#$%^&(){}[\]:;<>,.?/~_+\-=|\\]{5,30}$/,
      "The field contains an error"
    )
    .required("This field is required"),
});

export default validationSchema;
