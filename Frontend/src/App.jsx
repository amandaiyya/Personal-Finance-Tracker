import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";

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
    </>
  )
}

export default App
