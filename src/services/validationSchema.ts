import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .typeError("Will be a string")
    .email("the field contains an error")
    .matches(/^(?!\-)\S{2,}@\S+(\.\w{2,})(?!\-)$/, "Is not in correct format")
    .min(10, "the field contains an error")
    .max(63, "the field contains an error")
    .required("this field is required"),
  password: yup
    .string()
    .typeError("Will be a string")
    .min(5, "the field contains an error")
    .max(30, "the field contains an error")
    .matches(
      /^(?!\-|\.)[0-9a-zA-Z\*\!\@\#\$\%\^\&\(\)\{\}\[\]\:\;\<\>,\.\?\/\~_\+\-\=\|\\]{5,30}$/,
      "the field contains an error"
    )
    .required("this field is required"),
});

export default validationSchema;
