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

export default function SignIn() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
    onSubmit: values => {
      authenticate(values.email, values.password).then(data => {
        console.log(data);

      },
        error => {
          console.log("what ive doneeeee\n")
          console.log("ixi\n");
          console.log(error);
        });
    },
  });

  return (
    <div className="w-3/4 mx-auto">
      <h3>Already have an account? </h3>
      <form className='mt-6' onSubmit={formik.handleSubmit}>
        <div>
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
        <div className="py-5">
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
        <div class="flex items-start space-x-5">
          <button class="btn bg-gray-500 hover:bg-gray-700" type="submit">
            Sign In
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}