import { Link } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ISignupValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const signupSchema: Yup.Schema<ISignupValues> = Yup.object().shape({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .max(50, "Password must be no more than 50 characters")
    .required("Required"),
});

export function SignupForm() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>

        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            password: "",
          }}
          validationSchema={signupSchema}
          onSubmit={(
            values: ISignupValues,
            { setSubmitting }: FormikHelpers<ISignupValues>,
          ) => {
            // Call API or perform login logic here
            console.log("sigup successful!");
            setSubmitting(false);
          }}
        >
          {({ handleSubmit, errors }) => (
            <Form onSubmit={handleSubmit} method="post">
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="firstname">First name</Label>
                      <Field as={Input} name="firstname" placeholder="Max" />

                      <div className="h-3">
                        <ErrorMessage
                          name="firstname"
                          component="div"
                          className="flex items-center justify-end text-sm font-medium text-red-600"
                        />
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="lastname">Last name</Label>
                      <Field
                        as={Input}
                        name="lastname"
                        placeholder="Robinson"
                      />

                      <div className="h-3">
                        <ErrorMessage
                          name="lastname"
                          component="div"
                          className="flex items-center justify-end text-sm font-medium text-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Field
                      as={Input}
                      name="email"
                      type="email"
                      placeholder="m@example.com"
                    />

                    <ErrorMessage
                      name="email"
                      component="div"
                      className="flex items-center justify-end pr-2 text-sm font-medium text-red-600"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Field as={Input} name="password" type="password" />

                    <ErrorMessage
                      name="password"
                      component="div"
                      className="flex items-center justify-end pr-2 text-sm font-medium text-red-600"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={Object.keys(errors).length > 0}
                  >
                    Create an account
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <Link to="/login" className="underline">
                    Sign in
                  </Link>
                </div>
              </CardContent>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
}
