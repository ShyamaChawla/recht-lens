"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
    });

    if (error) {
      setError(error.message || "Unable to create account.");
      setLoading(false);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  };

  const handleGoogleSignup = async () => {
    setError("");

    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });
  };

  return (
    <main className="min-h-screen bg-[#020617] text-[#F8FAFC] flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0F172A]/80 p-8 shadow-2xl backdrop-blur-xl">

        <div className="mb-8 text-center">
          <Link
            href="/"
            className="text-2xl font-bold text-[#4169E1]"
          >
            RechtLens
          </Link>

          <h1 className="mt-6 text-3xl font-bold">
            Create your account
          </h1>

          <p className="mt-2 text-sm text-[#94A3B8]">
            Start understanding your contracts with RechtLens
          </p>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">

          <div>
            <label className="mb-2 block text-sm font-medium">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="w-full rounded-lg border border-white/10 bg-[#020617] px-4 py-3 text-sm outline-none transition focus:border-[#4169E1]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full rounded-lg border border-white/10 bg-[#020617] px-4 py-3 text-sm outline-none transition focus:border-[#4169E1]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 8 characters"
              required
              minLength={8}
              className="w-full rounded-lg border border-white/10 bg-[#020617] px-4 py-3 text-sm outline-none transition focus:border-[#4169E1]"
            />
          </div>

          {error && (
            <p className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#4169E1] py-3 text-sm font-semibold text-white transition hover:bg-[#5A7BFF] disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs text-[#64748B]">OR</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <button
          type="button"
          onClick={handleGoogleSignup}
          className="w-full rounded-lg border border-white/10 bg-white/5 py-3 text-sm font-semibold transition hover:bg-white/10"
        >
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-[#94A3B8]">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-[#7EA1FF] hover:text-white"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}