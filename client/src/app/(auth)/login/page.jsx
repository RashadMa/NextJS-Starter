import { handleGithubLogin } from "@/lib/actions";

const Login = async () => {
      return (
            <>
                  <form action={handleGithubLogin}>
                        <button>Login with github</button>
                  </form>
            </>
      )
}

export default Login