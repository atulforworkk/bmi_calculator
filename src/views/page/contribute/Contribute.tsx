type Props = {};
import { Button, TextInput, Textarea } from "@mantine/core";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { initialValues, validationSchema } from "./constants";
const Contribute = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const tags = ["hello", "fun", "cool"];

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
  
      setLoading(true);
      axios
        .post("https://tipsypasta-backend.onrender.com/add", {
          email: values.email,
          name: values.name,
          pasta_text: values.pasta,
          tags: tags,
        })
        .then(function (response) {
          console.log(response);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          setLoading(false);
        });
    },
  });

  const { values, errors, handleChange, handleSubmit, handleBlur } = formik;
  console.log("🚀 ~ Contribute ~ values:", values)
  return (
    <div className="flex justify-center items-center w-full ">
      <form onSubmit={handleSubmit} className="w-6/12 ">
        <TextInput
          label="Email"
          type="text"
          name="email"
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
          error={errors.email}
        />
        <TextInput
          label="Name"
          type="text"
          name="name"
          onChange={handleChange}
          value={values.name}
          onBlur={handleBlur}
          error={errors.name}
        />
        <Textarea
          size="lg"
          label=" CopyPasta"
          placeholder="Input placeholder"
          name="pasta"
          onChange={handleChange}
          value={values.pasta}
          onBlur={handleBlur}
          error={errors.pasta}
        />


        {loading ? (
          <Button className="my-2" type="submit" disabled>
            Submit
          </Button>
        ) : (
          <Button className="my-2" type="submit">
            Submit
          </Button>
        )}
      </form>
    </div>
  );
};

export default Contribute;
