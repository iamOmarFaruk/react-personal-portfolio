import ToggleButton from "./toggleButton/ToggleButton";
import Links from "./links/Links";

import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="bg">
        <Links />
      </div>
      <ToggleButton />
    </div>
  );
};

export default Sidebar;
