import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="bg-white sticky top-0 shadow-md z-20">
        <div className="mx-auto container px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-black" href="/">
                <h2 className="font-bold text-3xl">PASSIFY</h2>
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <div className="text-gray-500 transition hover:text-gray-500/75">
                      Create Event
                    </div>
                  </li>

                  <li>
                    <div className="text-gray-500 transition hover:text-gray-500/75">
                      <Link to="/explore"> Explore </Link>
                    </div>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <div className="rounded-md border-primaryColor border-2 border-solid px-5 py-2 text-sm font-medium text-primaryColor shadow hover:bg-primaryColor hover:text-white hover:shadow-2xl">
                    <Link to="/login"> Login </Link>
                  </div>

                  <div className="hidden sm:flex">
                    <div className="rounded-md bg-primaryColor px-5 py-2 text-sm font-medium text-white hover:drop-shadow-2xl">
                      <Link to="/Signup"> Sign up </Link>
                    </div>
                  </div>
                </div>

                <div className="block md:hidden">
                  <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
