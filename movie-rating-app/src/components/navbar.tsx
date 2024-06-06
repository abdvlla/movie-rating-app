import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    // <header className="">
    //   <nav
    //     className="mx-auto flex max-w-7xl items-center justify-between lg:px-8"
    //     aria-label="Global"
    //   >
    //     <PopoverGroup>
    //       <div className="flex lg:flex lg:gap-x-12">
    //         <NavLink to="/">
    //           <button className="-m-1.5 text-base font-semibold leading-7 text-gray-50 hover:text-gray-300">
    //             <span className="sr-only">Movie Rating App</span>
    //             Home
    //           </button>
    //         </NavLink>
    //         <NavLink to="/rated">
    //           <button className="-m-1.5 text-base font-semibold leading-7 text-gray-50 hover:text-gray-300">
    //             Rated
    //           </button>
    //         </NavLink>
    //       </div>
    //     </PopoverGroup>

    //     <div className="flex lg:hidden">
    //       <button
    //         type="button"
    //         className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-50"
    //         onClick={() => setMobileMenuOpen(true)}
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    //       </button>
    //     </div>
    //     <div className="hidden lg:flex lg:flex-1 lg:justify-end">
    //       <NavLink to="/auth">
    //         <button className="text-sm font-semibold leading-7 text-gray-50 hover:text-gray-300">
    //           Auth <span aria-hidden="true">&rarr;</span>
    //         </button>
    //       </NavLink>
    //     </div>
    //   </nav>
    //   <Dialog
    //     className="lg:hidden"
    //     open={mobileMenuOpen}
    //     onClose={setMobileMenuOpen}
    //   >
    //     <div className="fixed inset-0 z-10" />
    //     <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-50">
    //       <div className="flex items-center justify-between">
    //         <a href="/" className="-m-1.5 p-1.5">
    //           <span className="sr-only">Movie Rating App</span>
    //           Home
    //         </a>
    //         <button
    //           type="button"
    //           className="-m-2.5 rounded-md p-2.5 text-gray-900"
    //           onClick={() => setMobileMenuOpen(false)}
    //         >
    //           <span className="sr-only">Close menu</span>
    //           <XMarkIcon className="h-6 w-6" aria-hidden="true" />
    //         </button>
    //       </div>
    //       <div className="mt-6 flow-root">
    //         <div className="-my-6 divide-y divide-gray-900">
    //           <div className="space-y-2 py-6">
    //             <NavLink to="/rated">
    //               <button className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-9000">
    //                 Rated
    //               </button>
    //             </NavLink>
    //           </div>
    //           <div className="py-6">
    //             <NavLink to="/auth">
    //               <button className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-9000">
    //                 Auth
    //               </button>
    //             </NavLink>
    //           </div>
    //         </div>
    //       </div>
    //     </DialogPanel>
    //   </Dialog>
    // </header>

    <header className=" inset-x-0 top-0 z-50 absolute">
      <nav
        className="flex items-center justify-between p-6 lg:px-8 mx-auto max-w-6xl"
        aria-label="Global"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-50"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <button className="text-lg font-semibold leading-6 text-gray-50">
            <NavLink to="/">Home</NavLink>
          </button>
          <button className="text-lg font-semibold leading-6 text-gray-50">
            <NavLink to="/rated">Rated</NavLink>
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button className="text-lg font-semibold leading-6 text-gray-50">
            <NavLink to="/auth">API Auth</NavLink>
          </button>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-movieDark px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-50">
          <div className="flex items-center justify-between">
            <NavLink to="/">
              <button
                className="-m-1.5 p-1.5 block rounded-lg py-2 text-base font-semibold leading-7"
                onClick={() => setMobileMenuOpen(false)}
              >
                {" "}
                Home
                <span className="sr-only">Your Company</span>
              </button>
            </NavLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root">
            <div className="-my-6 divide-y divide-gray-50">
              <div className="space-y-2 py-6">
                <NavLink to="/rated">
                  <button
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Rated
                  </button>
                </NavLink>
              </div>
              <div className="py-6">
                <NavLink to="/auth">
                  <button
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Log in
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
