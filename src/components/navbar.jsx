import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className='navbar bg-base-100 sticky top-0'>
        <div className='flex-1'>
          <Link to={"/"}>
            <span className='btn btn-ghost normal-case text-xl'>daisyUI</span>
          </Link>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal p-0'>
            <li>
              <Link to='signin'>
                <span>Sing In</span>
              </Link>
              <Link to='signup'>
                <span>Sing up</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
