import { useFormik } from 'formik';
import { authenticate } from 'lib/user';

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validate,
    onSubmit: values => {
      authenticate(values.email, values.password);
    },
  });

  return (
    <div className="w-3/4 mx-auto">
      <h3>Create an account</h3>
      <form className='mt-6' onSubmit={formik.handleSubmit}>
        <div className='py-2'>
          <label className="block" htmlFor="name">Complete Name:</label>
          <input className="input-field"
            id="name"
            name="name"
            type="text"
            placeholder="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name} />
        </div>
        <div className='py-2'>
          <label className="block" htmlFor="email">E-mail:</label>
          <input className="input-field"
            id="email"
            name="email"
            type="email"
            placeholder="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email} />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <div className="py-2">
          <label className="block" htmlFor="password">Password:</label>
          <input className="input-field"
            id="password"
            name="password"
            type="password"
            placeholder="*******"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password} />
        </div>
        <div className="py-2">
          <label className="block" htmlFor="confirmPassword">Confirm Password:</label>
          <input className="input-field"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="*******"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword} />
        </div>
        <div class="flex items-start space-x-5 py-2">
          <button class="btn bg-gray-500 hover:bg-gray-700" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}