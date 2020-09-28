import { Component, Fragment } from "react";
import withContext from "withContext";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleChange = e =>
    this.setState({ [e.target.name]: e.target.value, error: "" });

  login = () => {
    const { username, password } = this.state;
    if (!username || !password) {
      return this.setState({ error: "Fill all fields!" });
    }
    let loggedIn = this.props.context.login(username, password);
    if (!loggedIn) {
      this.setState({ error: "Invalid Credentails" });
    }
  };
  render() {
    return !this.props.context.user ? (
      <Fragment>
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Username
              </label>
                <input className="input-field" id="username" type="text" placeholder="Username" onChange={this.handleChange} />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                  Password
              </label>
                <input className="input-field  mb-3" id="password" type="password" placeholder="********" onChange={this.handleChange} />
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={this.login} z>
                  Sign In
              </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                  Forgot Password?
              </a>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    ) : (
        Router.push('/products')
      );
  }
}
export default withContext(Login);