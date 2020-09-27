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
        <div class="flex justify-center">
          <div class="w-full max-w-xs">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Username
              </label>
                <input class="input-field" id="username" type="text" placeholder="Username" onChange={this.handleChange} />
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                  Password
              </label>
                <input class="input-field  mb-3" id="password" type="password" placeholder="********" onChange={this.handleChange} />
              </div>
              <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={this.login} z>
                  Sign In
              </button>
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
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