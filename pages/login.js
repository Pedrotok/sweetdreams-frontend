import Context from "Context";
import SignIn from "components/signIn"
import SignUp from "components/signUp"
import { useRouter } from 'next/router'

const login = () => {
  const { username, password } = this.state;
  if (!username || !password) {
    return this.setState({ error: "Fill all fields!" });
  }
  let loggedIn = this.props.context.login(username, password);
  if (!loggedIn) {
    this.setState({ error: "Invalid Credentails" });
  }
};

export default function Login() {
  const router = useRouter();
  return (
    <Context.Consumer>
      {values =>
        !values.user ? (
          <div className="py-10 divide-x divide-gray-400 flex flex-wrap pb-5 border-2">
            <div className="flex-1 ">
              <SignIn />
            </div>
            <div className="flex-1 ">
              <SignUp />
            </div>
          </div>
        ) : (
            router.push('/')
          )
      }
    </Context.Consumer >
  );
}