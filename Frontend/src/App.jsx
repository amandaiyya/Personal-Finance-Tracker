import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Toaster } from "react-hot-toast";

// Layout Wrapper of Entire App
function App() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 overflow-y-auto border border-sky-100">
          {/* Outlet Component of react router dom */}
          <Outlet />
        </div>
        <Footer />
      </div>
      
      {/* React Hot Toast Component */}
      <Toaster position="bottom-right" toastOptions={{className: 'text-sm sm:text-base'}}/>
    </>
  )
}

export default App
