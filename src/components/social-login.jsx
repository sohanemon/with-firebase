import { useContext } from "react";
import { User } from "../contexts/user-context";

const SocialLogin = () => {
  const { signInWithFacebook, signInWithGoogle } = useContext(User);
  return (
    <>
      <div className='flex flex-wrap justify-center'>
        <div className='w-full sm:w-1/2 sm:pr-2 mb-3 sm:mb-0 '>
          <button
            onClick={signInWithFacebook}
            className='btn rounded-full text-sm w-full bg-blue-800 hover:bg-blue-900 text-white font-bold  px-4 focus:outline-none focus:shadow-outline'
            type='button'
          >
            Login with Facebook
          </button>
        </div>
        <div className='w-full sm:w-1/2 sm:pl-2 '>
          <button
            onClick={signInWithGoogle}
            className='btn rounded-full text-sm w-full bg-red-700 hover:bg-red-800 text-white font-bold px-4 focus:outline-none focus:shadow-outline'
            type='button'
          >
            Login with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default SocialLogin;
