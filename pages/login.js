import SignIn from "components/signIn"
import SignUp from "components/signUp"
import { useRouter } from "next/router"
import { isSignedIn } from "lib/user"
import { useEffect } from 'react';
import { useAppState } from "hooks/useAppState";

export default function Login() {
  const { setUser } = useAppState();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn()) {
      router.push('/');
    }
  }, []);

  return (
    <div className="py-10 divide-x divide-gray-400 flex flex-wrap pb-5 border-2">
      <div className="flex-1 ">
        <SignIn setUser={setUser} />
      </div>
      <div className="flex-1 ">
        <SignUp />
      </div>
    </div>
  );
}