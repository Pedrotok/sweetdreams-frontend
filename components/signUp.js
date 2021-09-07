import { useFormik } from 'formik';
import { register } from 'lib/user';

const validate = values => {
  const errors = {};
  const requiredField = 'Campo obrigatório';
  if (!values.name) {
    errors.name = requiredField;
  }
  if (!values.email) {
    errors.email = requiredField;
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Endereço de email inválido';
  }
  if (!values.password) {
    errors.password = requiredField
  }
  else if(values.password.length < 8) {
    errors.password = 'Senha muito curta'
  }
  else if(values.password != values.confirmPassword) {
    errors.password = 'Senhas não correspondem'
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
      register(values.email, values.password).then(res => console.log(res));
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
        {formik.touched.name && formik.errors.name ? (
          <div className="error-message">{formik.errors.name}</div>
        ) : null}
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
          <div className="error-message">{formik.errors.email}</div>
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
        {formik.touched.password && formik.errors.password ? (
          <div className="error-message">{formik.errors.password}</div>
        ) : null}
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
        <div className="flex items-start space-x-5 py-2">
          <button className="btn bg-gray-500 hover:bg-gray-700" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}