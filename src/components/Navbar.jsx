import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAtom } from "../state/store";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

let navigation = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Pricing", href: "/pricing" },
  { name: "Register", href: "/register" },
];

let auth_nav = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Pricing", href: "/pricing" },
  { name: "Profile", href: "/profile" },
  { name: "Dashboard", href: "/dashboard" },
];

const Navbar = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (user.isAuthenticated) {
      navigation = auth_nav;
    }
  }, [user]);
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser({
      isAuthenticated: false,
    });
    window.location.href = "/";
  };

  return (
    <>
      <div
        className={`px-6 z-[22] w-full absolute top-0 pt-6 lg:px-8 ${
          location.pathname != "/" && "border border-b-1  h-[88px]"
        }`}
      >
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <NavLink to="/" >
              <div className="-m-1.5 p-1.5">
              <span className="sr-only">Cousine Roo</span>
              <img
                className="h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
              </div>
            </NavLink>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <NavLink
                onClick={() => setMobileMenuOpen(false)}
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? "-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-indigo-500 "
                    : "-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"}
              >

                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {user.isAuthenticated ? (
              <a
                href="#"
                onClick={() => logout()}
                className={({ isActive }) =>
                  isActive
                    ? "-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-indigo-500 "
                    : "-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                }
              >
                Logout
              </a>
            ) : (
              <NavLink
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-indigo-500 "
                    : "-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                }
              >
                Log in
              </NavLink>
            )}
          </div>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <Dialog
                as="div"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
              >
                <motion.div
                  className="slide-in-nav"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Dialog.Panel
                    focus="true"
                    className="fixed top-0 inset-0 z-[23] overflow-y-auto bg-white px-6 py-6 lg:hidden"
                  >
                    <div className="flex items-center justify-between">
                      <NavLink to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                          className="h-8"
                          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                          alt=""
                        />
                      </NavLink>
                      <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-6 flow-root">
                      <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                          {navigation.map((item) => (
                            <NavLink
                              onClick={() => setMobileMenuOpen(false)}
                              key={item.name}
                              to={item.href}
                              className={({ isActive }) =>
                                isActive
                                  ? "-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-indigo-500 "
                                  : "-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                              }
                            >
                              {item.name}
                            </NavLink>
                          ))}
                        </div>
                        <div className="py-6">
                          {user.isAuthenticated ? (
                            <a
                              href="#"
                              onClick={() => logout()}
                              className={({ isActive }) =>
                                isActive
                                  ? "-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-indigo-500 "
                                  : "-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                              }
                            >
                              Logout
                            </a>
                          ) : (
                            <NavLink
                              onClick={() => setMobileMenuOpen(false)}
                              to="/login"
                              className={({ isActive }) =>
                                isActive
                                  ? "-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-indigo-500 hover:bg-indigo-400"
                                  : "-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                              }
                            >
                              Log in
                            </NavLink>
                          )}
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </motion.div>
              </Dialog>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
