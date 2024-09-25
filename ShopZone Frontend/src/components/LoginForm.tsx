import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

import { Link } from "react-router-dom";

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

interface ILoginValues {
  email: string;
  password: string;
}

const loginSchema: Yup.Schema<ILoginValues> = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .max(50, "Password must be no more than 50 characters")
    .required("Required"),
});

export function LoginForm() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(
            values: ILoginValues,
            { setSubmitting }: FormikHelpers<ILoginValues>,
          ) => {
            // Call API or perform login logic here
            console.log("Login successful!");
            setSubmitting(false);
          }}
        >
          {({ handleSubmit, errors }) => (
            <Form onSubmit={handleSubmit} method="post">
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>

                    <Field
                      as={Input}
                      type="email"
                      name="email"
                      placeholder="m@example.com"
                    />
                    <div className="h-3">
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="flex items-center justify-end pr-2 text-sm text-red-600"
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <Link
                        to="/forgetpassword"
                        className="ml-auto inline-block text-sm underline"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                    <Field as={Input} type="password" name="password" />
                    <div className="h-3">
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="flex items-center justify-end pr-2 text-sm text-red-600"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={Object.keys(errors).length > 0}
                  >
                    Login
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link to="/signup" className="underline">
                    Sign up
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
