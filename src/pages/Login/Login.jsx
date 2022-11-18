import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hooks/useToken";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const { signIn, resetPassword } = useContext(AuthContext);
  const [loginError, setLoginError] = useState();
  const [loginUSerEmail, setLoginUSerEmail] = useState("");
  const [token] = useToken(loginUSerEmail);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(watch("email"));

  const form = location.state?.form?.pathname || "/";

  if (token) {
    navigate(form, { replace: true });
  }

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUSerEmail(data.email);
      })
      .catch((err) => {
        console.log(err.message);
        setLoginError(err.message);
      });
  };

  const handleResetPassword = () => {
    resetPassword(watch("email"))
      .then(() => {
        toast((t) => (
          <span>
            Password reset sent. <b>Please check your email.</b>
          </span>
        ));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-2xl text-center">Login</h2>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 character or longer.",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
            <label className="label">
              <span className="label-text">
                <button onClick={handleResetPassword}>Forget Password?</button>
              </span>
            </label>
          </div>
          <input
            className="btn btn-accent w-full"
            value="login"
            type="submit"
          />
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        <p className="text-center">
          <small>
            New to Doctors Portal?{" "}
            <Link to="/signup" className="text-secondary">
              Create new account
            </Link>
          </small>
        </p>
        <div className="divider">OR</div>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
