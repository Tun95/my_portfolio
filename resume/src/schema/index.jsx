import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup.string().required("Name is required*"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required*"),
  message: yup.string().required("Message box cannot be empty*"),
});
