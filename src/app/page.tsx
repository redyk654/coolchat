import GoToSignIn from "@/components/shared/GoToSignIn";
import GoToSignUp from "@/components/shared/GoToSignUp";

export default function Home() {
  return (
    <main className="text-center">
      <h1 className="text-2xl font-semibold">Welcome to the coolchat app</h1>
      <div>
        <GoToSignIn title="Go to Sing in" />
      </div>
      <div>
        <GoToSignUp title="Go to Sing up" />
      </div>
    </main>
  );
}
