const Sidebar = () => {
  const sideBarItems = ["Home", "Service", "News", "Blog", "Contact"];
  return (
    <div className="sidebar">
      {sideBarItems.map((item) => (
        <ui className="sidebar-item">{item}</ui>
      ))}
    </div>
  );
};

export default Sidebar;
