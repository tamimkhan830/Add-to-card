

export function Header() {

  
    return (
      <div className="bg-slate-400 flex justify-center items-center">
        <div className="navbar bg-base-10 w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div role="button" className="btn btn-ghost lg:hidden z-10">
              <svg z
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path

                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
          </div>
          <a className=" text-xl">token handler</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>About </a></li>
            <li><a>Services </a></li>
            <li><a>Gallery </a></li>
            <li><a>Contact </a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Sing in</a>
          <a className="btn mx-3">Sing up</a>
        </div>
      </div>
      </div>
    );
  }
