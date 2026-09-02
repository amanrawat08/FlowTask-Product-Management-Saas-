import { Link, useNavigate } from "react-router-dom";
import {useState} from "react";
import {Eye, EyeOff } from "lucide-react"
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <form className="flex w-full max-w-md flex-col items-center gap-4 rounded-xl bg-white px-10 py-12 shadow-xl z-10">
        {/* Logo */}
        <div className="h-20 w-20 rounded-xl border bg-slate-50 cursor-pointer" onClick={() => navigate("/")} />

        {/* Title */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-xl font-bold text-text">FlowTask</h1>

          <p className="max-w-[90%] text-xs leading-4 text-text-muted">
            Welcome back 👋 <br /> , Sign in to your FlowTask account

          </p>
        </div>

        {/* Email */}
        <div className="relative flex w-full flex-col gap-1">
          <label className="text-xs font-semibold text-text-muted">Email</label>

          <input
            type="email"
            placeholder="name@mail.com"
            className="h-10 w-full rounded-md border border-border pl-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Password */}
        <div className="relative flex w-full flex-col gap-1">
          <label className="text-xs font-semibold text-text-muted">
            Password
          </label>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="h-10 w-full rounded-md border border-border pl-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          <button onClick={() => setShowPassword(!showPassword)} className="absolute right-4  top-10 -translate-y-1/2 text-xs text-primary cursor-pointer">
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        <div className="flex w-full items-center justify-between text-xs text-text-muted">
            <div className="flex items-center gap-2 text-xs text-text-muted">
                <input type="checkbox" className="ml-2 accent-primary" />
                Remember me
            </div>
            <Link to="/forgot-password" className="text-xs text-primary hover:underline">
                Forgot Password?
            </Link>
        </div>

        {/* Sign In */}
        <button
          type="submit"
          className="h-10 w-full rounded-md bg-primary text-sm font-medium text-white transition hover:bg-primary-hover"
        >
          Sign In
        </button>

        {/* Separator */}
        <div className="flex w-full items-center gap-4 text-xs text-text-muted">
          <hr className="flex-1 border-border" />
          <span>Or</span>
          <hr className="flex-1 border-border" />
        </div>

        
        {/* Terms */}
        <p className="text-xs text-text-muted  ">
          Don't have an account? <Link to="/register" className="text-primary hover:underline ">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
