"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axiosClient from "@/app/lib/axios";

const SignInPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      const response: any = await axiosClient.post("/auth/login", {
        email,
        password,
      });
    } catch (err: any) {
      console.log("err", err.response.data);
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Login failed. Please check your credentials.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full relative bg-[#1c3829] flex overflow-hidden font-sans">
      {/* Dark green background with generated study/education themed graphic */}
      <div
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: "url('/images/bg-study.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Gradient overlay to make it look deeper and closer to the original design */}
      <div className="absolute inset-0 bg-linear-to-br from-[#284f3ab3] to-[#12241ab3] z-0 pointer-events-none" />

      {/* Top Right Navigation */}
      <div className="absolute top-8 right-12 z-20 hidden md:flex items-center gap-2 text-sm">
        <Link
          href="/signin"
          className="text-[#1c3829] font-bold text-lg hover:opacity-80 transition-opacity"
        >
          Sign In
        </Link>
        <span className="text-white/60 mx-1">|</span>
        <Link
          href="/signup"
          className="text-white/80 text-lg hover:text-white transition-colors"
        >
          Sign Up
        </Link>
      </div>

      {/* Bottom Center Social Icons */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex flex-col items-center gap-3">
        <span className="text-white/70 text-sm tracking-wide">
          Sign in with:
        </span>
        <div className="flex items-center gap-6">
          <button className="text-[#f1b34e] hover:text-white transition-colors transform hover:scale-110">
            {/* Google Icon SVG */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          </button>
          <button className="text-[#f1b34e] hover:text-white transition-colors transform hover:scale-110">
            {/* Twitter Icon SVG */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </button>
          <button className="text-[#f1b34e] hover:text-white transition-colors transform hover:scale-110">
            {/* Facebook Icon SVG */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main White Form Container with curved right side */}
      <div className="relative z-10 w-full lg:w-[65%] xl:w-[60%] min-h-screen bg-white rounded-br-[150px] lg:rounded-br-[350px] lg:rounded-tr-[50px] shadow-[20px_0_60px_rgba(0,0,0,0.5)] flex flex-col px-8 md:px-20 lg:px-32 py-12">
        {/* Logo */}
        <div className="flex items-center gap-3 pt-4">
          <div className="w-10 h-10 rounded-full bg-linear-to-tr from-[#f6ce72] to-[#f4a146] flex items-center justify-center text-white shadow-md">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          <span className="font-semibold text-gray-500 tracking-wider text-xl">
            belissa
          </span>
        </div>

        {/* Content Box */}
        <div className="flex-1 flex flex-col justify-center max-w-md w-full pt-16 lg:pt-0">
          <h1 className="text-4xl lg:text-[42px] leading-tight text-gray-700 font-light mb-1">
            Hello there,
          </h1>
          <h2 className="text-4xl lg:text-[45px] leading-tight text-[#223d30] font-bold mb-14">
            welcome to Belissa
          </h2>

          <form className="space-y-10" onSubmit={handleLogin}>
            {/* Email Input */}
            <div className="flex flex-col gap-2 relative">
              <label className="text-xs font-bold text-gray-800 tracking-widest uppercase">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-gray-300 py-3 outline-none focus:border-[#faa346] bg-transparent text-gray-800 placeholder:text-gray-400 placeholder:font-light transition-colors text-sm"
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-2 relative mb-2">
              <label className="text-xs font-bold text-gray-800 tracking-widest uppercase">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Set a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-b border-gray-300 py-3 outline-none focus:border-[#faa346] bg-transparent text-gray-800 placeholder:text-gray-400 placeholder:font-light transition-colors text-sm pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[#add4a3] hover:text-[#5a8662] transition-colors"
                >
                  {showPassword ? (
                    /* Eye-off icon */
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88L6.59 6.59m7.532 7.532l3.29 3.29M3 3l18 18"
                      />
                    </svg>
                  ) : (
                    /* Eye icon */
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <div className="flex justify-end mt-3">
                <a
                  href="#"
                  className="text-xs text-gray-500 hover:text-[#faa346] transition-colors font-medium"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3 -mt-4">
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{error}</span>
              </div>
            )}

            {/* Login Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 bg-linear-to-r from-[#fcd372] to-[#f49e46] text-white font-bold py-3.5 px-12 rounded opacity-90 hover:opacity-100 shadow-[0_4px_14px_0_rgba(244,158,70,0.39)] hover:shadow-[0_6px_20px_rgba(244,158,70,0.23)] transition-all transform hover:-translate-y-px tracking-wide text-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading && (
                  <svg
                    className="animate-spin w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                )}
                {loading ? "LOGGING IN..." : "LOGIN"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
