import * as React from 'react';
import { Formik, FormikErrors } from 'formik';
import Input from './Input';

type Props = {};

type FormValues = {
  name: string;
};

const NewTodo: React.SFC<Props> = props => {
  const inputRef = React.useRef<HTMLInputElement>();
  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Formik<FormValues>
      initialValues={{ name: '' }}
      onSubmit={({ name }, { resetForm }) => {
        console.log('submit ', name);
        resetForm();
      }}
      validate={values => {
        let errors: FormikErrors<FormValues> = {};
        if (!values.name) {
          errors.name = 'Required';
        }
        return errors;
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, submitCount }) => (
        <form onSubmit={handleSubmit}>
          <Input
            error={submitCount && errors.name && touched.name ? errors.name : false}
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            innerRef={inputRef}
            placeholder="New Todo"
            autoComplete="off"
          />
        </form>
      )}
    </Formik>
  );
};

export default NewTodo;
