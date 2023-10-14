import { Formik } from "formik";
import * as yup from "yup";
import { Box, Button, TextField, useMediaQuery } from "@mui/material";

import Header from "../../components/Header";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("Invalid Email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = () => {
    console.log();
  };
  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a new User Profile" />
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={userSchema}>
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              gap="30px"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}>
              <TextField
                type="text"
                variant="filled"
                name="firstName"
                label="First Name"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                fullWidth
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                type="text"
                variant="filled"
                name="lastName"
                label="Last Name"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                fullWidth
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                type="text"
                variant="filled"
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                fullWidth
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                type="text"
                variant="filled"
                name="contact"
                label="Contact Number"
                value={values.contact}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                fullWidth
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                type="text"
                variant="filled"
                name="address1"
                label="address 1"
                value={values.address1}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                fullWidth
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                type="text"
                variant="filled"
                name="address2"
                label="address 2"
                value={values.address2}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                fullWidth
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" variant="contained" color="secondary">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
