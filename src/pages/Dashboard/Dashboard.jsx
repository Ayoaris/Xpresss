import "./Dashboard.scss";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar2 from "../../Components/Navbar2/Navbar2";
import Datatable from "../../Components/datatable/Datatable";
import { useEffect } from "react";

const Dashboard = () => {
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      // window.location.href = "/";
      window.location.reload();
    }
  }, [token]);
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="listContainer">
        <Navbar2 />

        <div className="listContainer2">
          <Datatable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
