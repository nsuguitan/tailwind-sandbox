import { IoHome } from "react-icons/io5";
import { FaChartBar, FaFlask, FaSun } from "react-icons/fa";
//import { HiDocumentReport } from "react-icons";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white text-3xl shadow-lg ">
      <SideBarIcon icon={<IoHome size="28" />} />
      <SideBarIcon icon={<FaChartBar size="28" />} />
      <SideBarIcon icon={<FaFlask size="28" />} />
      <SideBarIcon icon={<FaSun size="28" />} />
    </div>
  );
};

const SideBarIcon = ({ icon }) => {
  return <div className="sidebar-icon">{icon}</div>
};

export default SideBar;
