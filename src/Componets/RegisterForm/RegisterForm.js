import { Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./RegisterForm.css";

const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
});

function RegisterForm({ usersData, setUsersData, setPage }) {
    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
            }}
            onSubmit={(values, { resetForm }) => {
                const newUser = { ...values };
                setUsersData([...usersData, newUser]);

                resetForm();

                setPage("log");
            }}
            validationSchema={validationSchema}
        >
            {({ values, errors, touched, handleChange, handleBlur, isValid, dirty, handleSubmit }) => (
                <form className="registration-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <Field
                            type="text"
                            id="name"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        <ErrorMessage name="name" component="div" className="error" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <Field
                            type="email"
                            id="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <ErrorMessage name="email" component="div" className="error" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <Field
                            type="password"
                            id="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        <ErrorMessage name="password" component="div" className="error" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <Field
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                        />
                        <ErrorMessage name="confirmPassword" component="div" className="error" />
                    </div>

                    <button type="submit" className="submit-button" disabled={!isValid || !dirty}>
                        Register
                    </button>
                </form>
            )}
        </Formik>
    );
}

export default RegisterForm;
