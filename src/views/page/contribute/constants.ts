import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  // firstName: Yup.string().required().label("First Name"),
  // lastName: Yup.string().required().label("Last Name"),
  // //   password: Yup.string().required().label("Password"),
  email: Yup.string().email().required().label("Email"),
  name: Yup.string().required().label("Name"),
  pasta: Yup.string().required().label("Pasta Text"),
});

export const initialValues = {
  email: "",
  name: "",
  pasta: "",
  tags:["hello", "fun", "cool"],
};
