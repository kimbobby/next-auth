import { login, githubLogin } from "@/lib/action";

export default function LoginForm() {
  return (
    <>
      <form action={login}>
        <input type="email" name="email" placeholder="Enter your email" />
        <input type="password" name="password" placeholder="Enter your password" />
        <button>로그인</button>
      </form>
      <form action={githubLogin}>
        <button>GitHub 로그인</button>
      </form>
    </>
  );
}
