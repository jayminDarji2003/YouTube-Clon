import React from "react";
import { sidebarItems } from "../constants";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SidebarItem = ({ iconClass, text, color }) => {
  return (
    <div className="flex items-center py-3 px-2 cursor-pointer rounded-lg gap-5 hover:bg-[#272727]">
      <i className={`fa-solid ${iconClass}`}></i>
      <p className={color}>{text}</p>
    </div>
  );
};

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) {
    return (
      <div className="lg:pl-3 text-white mb-6">
        <div>
          {sidebarItems.map((item, index) => (
            <Link to={"/" + item.redirect} key={index}>
              <SidebarItem
                key={index}
                iconClass={item.iconClass}
                text="."
                color="text-black"
              />
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="lg:pl-3 text-white mb-6">
      <div>
        {sidebarItems.map((item, index) => (
          <Link to={"/" + item.redirect} key={index}>
            <SidebarItem
              key={index}
              iconClass={item.iconClass}
              text={item.text}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
