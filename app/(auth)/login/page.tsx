"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const submitfrom = async (e: any) => {
    e.preventDefault();
    try {
      const res = await signIn("auth", {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        setError("Invalid");
        return;
      }
      router.replace("/dashboard");
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <div className="flex justify-center">
        <h1 className="ml-10 text-3xl font-bold">Login</h1>
      </div>
      <div className="flex justify-center mt-8">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 mx-auto text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={submitfrom}
            >
              Login
            </button>
            {error && (
              <div className="bg-red-500 text-white w-fit rounded-md px-3 py-1">
                {error}
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
