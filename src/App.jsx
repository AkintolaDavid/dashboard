import * as React from "react";
import Dashboard from "./Dashboard";
import { ChakraProvider, Avatar } from "@chakra-ui/react";
import logo from "./img/logo.png";
import mario from "./img/mario1.jpeg";
function App() {
  const menuhandler = () => {
    const menu = document.getElementById("menu");
    const check = menu.classList.contains("hidden");
    if (check) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  };
  return (
    <ChakraProvider>
      <div className="md:grid md:grid-cols-10">
        <div className="md:col-span-2 md:justify-end bg-green-500 text-white">
          <nav className="text-right">
            <div className="flex justify-center items-center">
              <div className="mt-4">
                <a href="/" className="items-center justify-center">
                  <img src={logo} alt="logo" className="h-8 ml-3" />
                </a>
              </div>
              <div>
                <svg
                  onClick={menuhandler}
                  className="md:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{
                    maxWidth: "1.5rem",
                    width: "100%",
                    // display: "none",
                  }}
                  media="(min-width: 768px)"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </div>
            </div>
            <ul className="mt-10 hidden md:block" id="menu">
              <li className="font-semibold py-2">
                <a
                  href="/"
                  className="px-2 flex justify-end border-r-4 border-white "
                >
                  <span className="mr-3">Home</span>
                  <svg
                    className="w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </a>
              </li>
              <li className="py-3 font-semibold">
                <a href="/" className="px-3 flex justify-end   ">
                  <span className="mr-3">Transactions</span>
                  <svg
                    className="w-6  "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </a>
              </li>
              <li className="py-3 font-semibold">
                <a href="/" className="px-3 flex justify-end">
                  <span className="mr-3">Contact </span>
                  <svg
                    className="w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </a>
              </li>
              <li className="py-3 font-semibold">
                <a href="/" className="px-3 flex justify-end">
                  <span className="mr-3">Settings </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.455 1.45A.5.5 0 0 1 6.952 1h2.096a.5.5 0 0 1 .497.45l.186 1.858a4.996 4.996 0 0 1 1.466.848l1.703-.769a.5.5 0 0 1 .639.206l1.047 1.814a.5.5 0 0 1-.14.656l-1.517 1.09a5.026 5.026 0 0 1 0 1.694l1.516 1.09a.5.5 0 0 1 .141.656l-1.047 1.814a.5.5 0 0 1-.639.206l-1.703-.768c-.433.36-.928.649-1.466.847l-.186 1.858a.5.5 0 0 1-.497.45H6.952a.5.5 0 0 1-.497-.45l-.186-1.858a4.993 4.993 0 0 1-1.466-.848l-1.703.769a.5.5 0 0 1-.639-.206l-1.047-1.814a.5.5 0 0 1 .14-.656l1.517-1.09a5.033 5.033 0 0 1 0-1.694l-1.516-1.09a.5.5 0 0 1-.141-.656L2.46 3.593a.5.5 0 0 1 .639-.206l1.703.769c.433-.36.928-.65 1.466-.848l.186-1.858Zm-.177 7.567-.022-.037a2 2 0 0 1 3.466-1.997l.022.037a2 2 0 0 1-3.466 1.997Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li className="py-3 font-semibold">
                <a href="/" className="px-3 flex justify-end">
                  <span className="mr-3">Logout </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14 4.75A2.75 2.75 0 0 0 11.25 2h-3A2.75 2.75 0 0 0 5.5 4.75v.5a.75.75 0 0 0 1.5 0v-.5c0-.69.56-1.25 1.25-1.25h3c.69 0 1.25.56 1.25 1.25v6.5c0 .69-.56 1.25-1.25 1.25h-3c-.69 0-1.25-.56-1.25-1.25v-.5a.75.75 0 0 0-1.5 0v.5A2.75 2.75 0 0 0 8.25 14h3A2.75 2.75 0 0 0 14 11.25v-6.5Zm-9.47.47a.75.75 0 0 0-1.06 0L1.22 7.47a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06l-.97-.97h7.19a.75.75 0 0 0 0-1.5H3.56l.97-.97a.75.75 0 0 0 0-1.06Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
          <div className="hidden md:block fixed bottom-14  item-center justify-center">
            <div className="flex">
              <div className="ml-2 flex flex-col border-r-2 border-white text-sm">
                <span>Adebayo Scott</span>
                <span className="mr-2">arieepxx@gmail.com</span>
              </div>
              <div>
                <Avatar size="sm" src={mario} className="ml-1 mt-1"></Avatar>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:col-span-8" style={{ minHeight: "100vh" }}>
          <Dashboard name="Adebayo Scott" />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
