// src/app/sign-in/page.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Form, TextField, Label, Input, FieldError, Button } from "@heroui/react";
import { At, Lock, Eye, EyeSlash } from "@gravity-ui/icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authClient } from "@/lib/auth-client";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

export default function SignIn() {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.currentTarget));

    const { email, password } = formData;
    const { data, error } = await authClient.signIn.email({

      email,
      password,
      callbackURL: "/",

    });

    if (error) {
      toast.error(error.message || "Something went wrong. Please try again.");
      return;
    }

    toast.success("Account created successfully!");
    router.push("/signin");
  };

  const handleGoogle = async () => {
    console.log("Google SignIn Feature Loading...");
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />

      <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center p-4">
        <div className="w-full max-w-md">

          {/* Brand */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#7c3aed] rounded-2xl mb-3 shadow-lg shadow-violet-900/40">
              <Lock width={22} height={22} color="white" />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Welcome back
            </h1>
            <p className="text-gray-500 text-sm mt-1">Sign in to your HireLoop account</p>
          </div>

          {/* Card */}
          <div className="bg-[#161616] border border-[#2a2a2a] shadow-xl rounded-2xl p-6">
            <Form className="flex flex-col gap-5" onSubmit={handleSubmit}>

              {/* Email */}
              <TextField
                isRequired
                name="email"
                type="email"
                validate={(v) =>
                  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
                    ? "Enter a valid email address."
                    : null
                }
                className="flex flex-col gap-1"
              >
                <Label className="text-sm font-medium text-gray-300">Email</Label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 pointer-events-none">
                    <At width={16} height={16} color="#6b7280" />
                  </span>
                  <Input
                    placeholder="you@example.com"
                    className="w-full pl-9 pr-4 py-2 rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] text-white placeholder:text-gray-600 text-sm outline-none focus:border-violet-500 hover:border-violet-400 transition-colors"
                  />
                </div>
                <FieldError className="text-xs text-red-400 mt-0.5" />
              </TextField>

              {/* Password */}
              <TextField
                isRequired
                name="password"
                type={showPass ? "text" : "password"}
                validate={(v) =>
                  v.length < 6 ? "Password must be at least 6 characters." : null
                }
                className="flex flex-col gap-1"
              >
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium text-gray-300">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="text-xs text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative flex items-center">
                  <span className="absolute left-3 pointer-events-none">
                    <Lock width={16} height={16} color="#6b7280" />
                  </span>
                  <Input
                    placeholder="Min. 6 characters"
                    className="w-full pl-9 pr-10 py-2 rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] text-white placeholder:text-gray-600 text-sm outline-none focus:border-violet-500 hover:border-violet-400 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass((v) => !v)}
                    className="absolute right-3 flex items-center text-gray-500 hover:text-gray-300 transition-colors"
                    aria-label={showPass ? "Hide password" : "Show password"}
                  >
                    {showPass
                      ? <EyeSlash width={16} height={16} color="#6b7280" />
                      : <Eye width={16} height={16} color="#6b7280" />
                    }
                  </button>
                </div>
                <FieldError className="text-xs text-red-400 mt-0.5" />
              </TextField>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold text-sm h-11 rounded-xl shadow-md shadow-violet-900/40 transition-all"
              >
                Sign In
              </Button>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-[#2a2a2a]" />
                <span className="text-xs text-gray-600 font-medium">or continue with</span>
                <div className="flex-1 h-px bg-[#2a2a2a]" />
              </div>

              {/* Google */}
              <Button
                type="button"
                onPress={handleGoogle}
                className="w-full border border-[#2a2a2a] hover:border-[#3a3a3a] hover:bg-[#1f1f1f] bg-[#0f0f0f] text-gray-300 font-medium text-sm h-11 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <GoogleIcon />
                Sign in with Google
              </Button>

              {/* Sign Up Link */}
              <p className="text-center text-sm text-gray-500">
                Don&apos;t have an account?{" "}
                <Link
                  href="/signup"
                  className="text-violet-400 hover:text-violet-300 font-semibold transition-colors"
                >
                  Sign up
                </Link>
              </p>

            </Form>
          </div>
        </div>
      </div>
    </>
  );
}