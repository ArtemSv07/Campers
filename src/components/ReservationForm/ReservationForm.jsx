import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import { startOfDay } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "../Button/Button";

import clsx from "clsx";
import css from "./ReservationForm.module.css";

const CustomDateField = ({ field, form, placeholder }) => (
  <DatePicker
    className={clsx("inputLocal", css.inputForm, css.CustomDateField)}
    selected={(field.value && new Date(field.value)) || null}
    onChange={(val) => {
      form.setFieldValue(field.name, val);
      form.validateField(field.name);
    }}
    placeholderText={placeholder}
  />
);

CustomDateField.propTypes = {
  field: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
  }).isRequired,
  form: PropTypes.shape({
    setFieldValue: PropTypes.func.isRequired,
    validateField: PropTypes.func.isRequired,
  }).isRequired,
  placeholder: PropTypes.string,
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Enter at least 3 characters")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  date: Yup.date()
    .min(startOfDay(new Date()), "Date must be today or in the future")
    .required("Required"),
  textarea: Yup.string()
    .min(5, "Enter at least 5 characters!")
    .max(500, "Too Long, maximum 500 characters!"),
});

const Reservation = () => {
  const handleClick = () => {};
  const handleSubmit = (value, { resetForm }) => {
    toast.success("Sent successfully");
    resetForm();
  };

  return (
    <div className={css.div}>
      <h3 className={css.h3}>Book your campervan now</h3>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={{ name: "", email: "", date: "", textarea: "" }}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
        validateOnChange={true}
      >
        <Form className={css.form}>
          <div className={css.fieldBox}>
            <Field
              className={clsx("inputLocal", css.inputForm)}
              placeholder="Name*"
              type="text"
              name="name"
            />
            <ErrorMessage
              className={css.errMessage}
              component="span"
              name="name"
              as="span"
            />
          </div>
          <div>
            <Field
              className={clsx("inputLocal", css.inputForm)}
              placeholder="Email*"
              type="email"
              name="email"
            />
            <ErrorMessage
              className={css.errMessage}
              component="span"
              name="email"
              as="span"
            />
          </div>
          <div>
            <Field
              className={clsx("inputLocal", css.inputForm)}
              placeholder="Booking date*"
              name="date"
              component={CustomDateField}
            />
            <ErrorMessage
              className={css.errMessage}
              component="span"
              name="date"
              as="span"
            />
          </div>
          <div>
            <Field
              className={clsx("inputLocal", css.textarea, css.inputForm)}
              placeholder="Comment"
              as="textarea"
              name="textarea"
              style={{ resize: "none" }}
            />
            <ErrorMessage
              className={css.errMessage}
              component="span"
              name="textarea"
              as="span"
            />
          </div>
          <Button
            type={"submit"}
            className={css.button}
            name="Send"
            handleClick={handleClick}
          />
        </Form>
      </Formik>
      <ToastContainer draggable closeOnClick position="bottom-right" />
    </div>
  );
};

export default Reservation;
