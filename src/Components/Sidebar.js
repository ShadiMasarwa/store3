import React from "react";

let showSidebar = true;

const Sidebar = () => {
  return showSidebar ? (
    <div className="container-fluid col-3 sticky-bottom">
      <div className="row">
        <div className="bg-primary min-vh-100">Hello</div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Sidebar;
