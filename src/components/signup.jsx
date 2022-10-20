import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { User } from "../contexts/user-context";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const { createUserWithEmail } = useContext(User);
  const createUser = (data) => {
    createUserWithEmail(data.email, data.password);
  };
  return (
    <>
      {" "}
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col items-center'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Register now!</h1>
            <p className='py-6 w-[30ch] text-center'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
          </div>
          <div className='card flex-shrink-0 w-96 shadow-2xl bg-base-100'>
            <form onSubmit={handleSubmit(createUser)} className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  {...register("email", { required: "Email is required" })}
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
                  type='password'
                  placeholder='password'
                  className='input input-bordered'
                />
              </div>
              <div className='form-control mt-6'>
                <button className='btn btn-primary'>Register</button>
              </div>
              <label className='label'>
                {" "}
                Already have account?{" "}
                <Link to='/signin' className='hover:underline'>
                  Sign in
                </Link>
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

/* ----------------------------- utilities ----------------------------- */
