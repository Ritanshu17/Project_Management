import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10">
      <h1>Project Management App</h1>

      <Link href="/auth/login">Login</Link>

      <br />

      <Link href="/auth/register">Register</Link>

      <br />

      <Link href="/dashboard">Dashboard</Link>
    </div>
    );
}