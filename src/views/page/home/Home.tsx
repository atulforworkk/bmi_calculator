import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input } from "@mantine/core";
import { Button } from "@mantine/core";
import { useState } from "react";
// Example Validation Schema
const ValidationSchema = Yup.object().shape({
  weight: Yup.number().required("Weight is required"),
  height: Yup.number().required("Height is required"),
});

export default function BMICalculator() {
  const [bmi,setBmi]=useState("");
  return (
    <div className="flex flex-col h-[80vh] items-center justify-center">
      <div className="flex flex-col w-4/12">
        <Formik
          initialValues={{ weight: "", height: "" }}
          validationSchema={ValidationSchema}
          onSubmit={(values) => {
            const heightInMeters = Number(values.height) / 100;
            const weight = Number(values.weight);
            const bmi = weight / (heightInMeters * heightInMeters);
            setBmi(bmi.toFixed(2));
            console.log("BMI:", bmi.toFixed(2));
          }}
        >
          {() => (
            <Form className="flex flex-col">
              <div>
                <label htmlFor="weight">Weight (in Kg)</label>
                <Field as={Input} type="text" name="weight" />
              </div>
              <div className="mt-4">
                <label htmlFor="height">Height (in cm)</label>
                <Field as={Input} type="text" name="height" />
              </div>
              <Button className="mt-4" type="submit">
                Calculate
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <div>
        <p className="mt-8">Your BMI is {bmi}</p>
      </div>
    </div>
  );
}
