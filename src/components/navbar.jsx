import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className='navbar bg-base-100 sticky top-0'>
        <div className='flex-1'>
          <Link to={"/"}>
            <a className='btn btn-ghost normal-case text-xl'>daisyUI</a>
          </Link>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal p-0'>
            <li>
              <Link to='signin'>
                <a>Sing In</a>
              </Link>
              <Link to='signup'>
                <a>Sing up</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
