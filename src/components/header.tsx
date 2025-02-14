import { Fragment, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { CartContext } from "../context";
import { IMAGE_URL, instance } from "../helpers";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [deskMenuOpen, setDeskMenuOpen] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const categories = async () => {
    try {
      const response = await instance.get("/category.php");
      console.log(response.data);
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const menuclose = (data) => {
    setDeskMenuOpen(false);
    navigate(data);
  };

  useEffect(() => {
    categories();
    window.addEventListener("click", (e) => {
      setDeskMenuOpen(false);
    });
  }, []);

  return (
    <header className="bg-white" style={{ background: "#ccc" }}>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-9 w-auto"
              src="https://jigoindia.com/wp-content/themes/jigomain/images/jigo-logo.png"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <Link
            type="button"
            className="m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            to={"cart"}
          >
            <span className="sr-only">Open main menu</span>
            <ShoppingCartIcon className="h-6 w-6 text-purple-500 hover:scale-105"></ShoppingCartIcon>
            <div
              style={{
                height: 15,
                width: 15,
                borderRadius: 8,
                backgroundColor: "#4B0891",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "#fff",
                  padding: 2,
                  borderRadius: 10,
                  fontSize: 10,
                }}
              >
                {cart.length > 0 ? cart.length : 0}
              </span>
            </div>
          </Link>

          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link to="/">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 hover:font-bold"
            >
              Home
            </a>
          </Link>
          <Link to="/about">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 hover:font-bold"
            >
              About Us
            </a>
          </Link>
          <Popover className="relative">
            <Popover.Button
              onClick={() => setDeskMenuOpen(!deskMenuOpen)}
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 hover:font-bold"
            >
              Product
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
              show={deskMenuOpen}
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      onClick={() => menuclose("category/" + item.cname)}
                      key={item.cid}
                      className="group relative flex items-center gap-x-4 rounded-lg p-1 font-medium text-gray-90 text-sm leading-6 hover:bg-indigo-200 cursor-pointer"
                    >
                      <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <img
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                          src={IMAGE_URL + item.cimage}
                        />
                      </div>
                      <div className="flex-auto">
                        <div className="block font-semibold text-gray-900 uppercase">
                          {item.cname}
                          <span className="absolute inset-0" />
                        </div>
                        {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link to="/blog">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 hover:font-bold"
            >
              Blog
            </a>
          </Link>
          <Link to="/contact">
            <a
              href=""
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 hover:font-bold"
            >
              Contact Us
            </a>
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              <Link
                to={"cart"}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <ShoppingCartIcon className="h-6 w-6 text-purple-500 hover:scale-105"></ShoppingCartIcon>
                <div
                  style={{
                    height: 15,
                    width: 15,
                    borderRadius: 8,
                    backgroundColor: "#4B0891",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: "#fff",
                      padding: 2,
                      borderRadius: 10,
                      fontSize: 10,
                    }}
                  >
                    {cart.length > 0 ? cart.length : 0}
                  </span>
                </div>
              </Link>
            </Popover.Button>
          </Popover>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a
              onClick={() => {
                setMobileMenuOpen(false);
              }}
              href="#"
              className="-m-1.5 p-1.5 "
            >
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto hover:scale-110 "
                src="https://jigoindia.com/wp-content/themes/jigomain/images/jigo-logo.png"
                alt=""
              />
            </a>
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
                <Link
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                  to={"/"}
                >
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-indigo-600 hover:font-bold"
                  >
                    Home
                  </a>
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-indigo-600 hover:font-bold">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Link
                            to={"category/" + item.cname}
                            onClick={() => {
                              setMobileMenuOpen(false);
                            }}
                          >
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-indigo-200"
                            >
                              {item.cname}
                            </Disclosure.Button>
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Link
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                  to={"/about"}
                >
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-indigo-600 hover:font-bold"
                  >
                    About Us
                  </a>
                </Link>
                <Link
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                  to={"/blog"}
                >
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-indigo-600 hover:font-bold"
                  >
                    Blog
                  </a>
                </Link>
                <Link
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                  to={"/contact"}
                >
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-indigo-600 hover:font-bold"
                  >
                    Contact Us
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
