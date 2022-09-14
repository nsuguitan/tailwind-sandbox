import { IoHome } from "react-icons/io5";
import { FaChartBar, FaFlask, FaSun } from "react-icons/fa";
//import { HiDocumentReport } from "react-icons";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white text-3xl shadow-lg ">
      <SideBarIcon icon={<IoHome size="28" />} text="Homepage" />
      <SideBarIcon icon={<FaChartBar size="28" />} text="Report visuals" />
      <SideBarIcon icon={<FaFlask size="28" />} text="Experiments" />
      <SideBarIcon icon={<FaSun size="28" />} text="Light/Dark Mode" />
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 👍' }) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  )
};

export default SideBar;
