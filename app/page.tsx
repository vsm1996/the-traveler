import Image from "next/image";
import RegisterForm from "./components/registerForm";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Eat, Sleep, Chant, Repeat 2
      <RegisterForm />
    </main>
  );
}
