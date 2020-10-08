import Context from "Context";
import SignIn from "components/signIn"
import { useRouter } from 'next/router'

const registerDiv = (
  <div className="flex-1">
    oi nhenhenzinhazinha2oi nhenhenzinhazinha2oi nhenhenzinhazinha2oi
  </div>
);

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
          <div className="flex flex-wrap space-x-8 pb-5">
            <div className="flex-1 ">
              <SignIn />
            </div>
            <div className="flex-1 ">
              {registerDiv}
            </div>
          </div>
        ) : (
            router.push('/')
          )
      }
    </Context.Consumer >
  );
}