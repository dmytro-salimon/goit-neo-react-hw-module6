import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        addContact({ id: nanoid(), ...values });
        resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.field}>
          <Field
            className={css.input}
            name="name"
            type="text"
            placeholder="Name"
          />
          <ErrorMessage className={css.error} name="name" component="div" />
        </div>
        <div className={css.field}>
          <Field
            className={css.input}
            name="number"
            type="text"
            placeholder="Phone number"
          />
          <ErrorMessage className={css.error} name="number" component="div" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
