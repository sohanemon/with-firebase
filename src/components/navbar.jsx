import { useContext } from "react";
import { Link } from "react-router-dom";
import { User } from "../contexts/user-context";

const Navbar = () => {
  const { user, _signOut } = useContext(User);
  return (
    <>
      <div className='navbar bg-base-100 sticky top-0'>
        <div className='flex-1'>
          <Link to={"/"}>
            <span className='btn btn-ghost normal-case text-xl'>daisyUI</span>
          </Link>
          <p> {user?.email?.split("@")[0]}</p>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal p-0'>
            {!user?.uid ? (
              <>
                <li>
                  <Link to='signin'>
                    <span>Sing In</span>
                  </Link>
                </li>
                <li>
                  <Link to='signup'>
                    <span>Sing up</span>
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <button onClick={_signOut}>Signout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
