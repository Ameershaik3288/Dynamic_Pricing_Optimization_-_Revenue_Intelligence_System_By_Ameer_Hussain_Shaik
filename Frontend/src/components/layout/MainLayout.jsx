import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import "./layout.css";

function MainLayout({ children }) {

  return (

    <div className="app-layout">

      <Sidebar />

      <div className="content-area">

        <Navbar />

        {children}

      </div>

    </div>

  );

}

export default MainLayout;