const Signup = () => {
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
            <form className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
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
                  type='password'
                  placeholder='password'
                  className='input input-bordered'
                />
              </div>
              <div className='form-control mt-6'>
                <button className='btn btn-primary'>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
