import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Next auth</h1>
      <Link href="/login">Login</Link>
    </div>
  );
}
