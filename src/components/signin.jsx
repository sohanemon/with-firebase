import { useContext } from "react";
import { Link } from "react-router-dom";
import { User } from "../contexts/user-context";
import { useForm } from "react-hook-form";
import SocialLogin from "./social-login";

const Signin = () => {
  const { signInWithEmail } = useContext(User);
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    signInWithEmail(data.email, data.password);
  };

  return (
    <>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col items-center'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Login now!</h1>
            <p className='py-6 w-[30ch]'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
          </div>
          <div className='card flex-shrink-0 w-96 shadow-2xl bg-base-100'>
            <form onSubmit={handleSubmit(onSubmit)} className='card-body'>
              <SocialLogin />
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  {...register("email")}
                  type='email'
                  placeholder='email'
                  className='input input-bordered'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  {...register("password")}
                  name='password'
                  type='password'
                  placeholder='password'
                  className='input input-bordered'
                />
                <label className='label'>
                  <a href='#' className='label-text-alt link link-hover'>
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className='form-control mt-6'>
                <button className='btn btn-primary'>Login</button>
              </div>
              <label className='label'>
                {" "}
                Don't have account?{" "}
                <Link to='/signup' className='hover:underline'>
                  Sign up
                </Link>
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
