import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4  ">
      <form className="flex w-full max-w-md flex-col items-center gap-4 rounded-xl bg-white px-10 py-10 shadow-xl z-10">

        {/* Logo */}
        <div className="h-20 w-20 rounded-xl border bg-slate-50 cursor-pointer" onClick={() => navigate("/")} />

        {/* Title */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-xl font-bold text-text">
            Create your account
          </h1>

          <p className="max-w-[90%] text-xs leading-4 text-text-muted">
            Join FlowTask and start managing your projects efficiently.
          </p>
        </div>

        {/* Full Name */}
        <div className="flex w-full flex-col gap-1">
          <label
            htmlFor="name"
            className="text-xs font-semibold text-text-muted"
          >
            Full Name
          </label>

          <input
            id="name"
            type="text"
            placeholder="John Doe"
            className="h-10 w-full rounded-md border border-border px-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Email */}
        <div className="flex w-full flex-col gap-1">
          <label
            htmlFor="email"
            className="text-xs font-semibold text-text-muted"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="name@mail.com"
            className="h-10 w-full rounded-md border border-border px-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Password */}
        <div className="relative flex w-full flex-col gap-1">
          <label
            htmlFor="password"
            className="text-xs font-semibold text-text-muted"
          >
            Password
          </label>

          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="h-10 w-full rounded-md border border-border pl-4 pr-12 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-9 cursor-pointer text-primary"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="relative flex w-full flex-col gap-1">
          <label
            htmlFor="confirmPassword"
            className="text-xs font-semibold text-text-muted"
          >
            Confirm Password
          </label>

          <input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="h-10 w-full rounded-md border border-border pl-4 pr-12 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
            className="absolute right-4 top-9 cursor-pointer text-primary"
          >
            {showConfirmPassword ? (
              <EyeOff size={16} />
            ) : (
              <Eye size={16} />
            )}
          </button>
        </div>

        {/* Terms */}
        <div className="flex w-full items-center gap-2 text-xs text-text-muted">
          <input
            type="checkbox"
            className="accent-primary"
          />

          <span>
            I agree to the{" "}
            <Link
              to="/terms"
              className="text-primary hover:underline"
            >
              Terms & Conditions
            </Link>
          </span>
        </div>

        {/* Register */}
        <button
          type="submit"
          className="h-10 w-full rounded-md bg-primary text-sm font-medium text-white transition hover:bg-primary-hover"
        >
          Create Account
        </button>

        {/* Login */}
        <p className="text-xs text-text-muted">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary hover:underline"
          >
            Sign In
          </Link>
        </p>

      </form>
    </div>
  );
};

export default Register;