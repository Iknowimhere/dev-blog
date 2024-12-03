import NavBar from "../components/NavBar";
import { Outlet } from "react-router";

const App = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64'>
      {/* Navbar */}
      <NavBar />
      <Outlet />
    </div>
  );
};

export default App;
