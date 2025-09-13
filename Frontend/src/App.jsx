import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
        <Footer />
      </div>
      
      <Toaster position="bottom-right" toastOptions={{className: 'text-sm sm:text-base'}}/>
    </>
  )
}

export default App
