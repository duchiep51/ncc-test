const Menu = () => {
  const sideBarItems = ["Home", "Service", "News", "Blog", "Contact"];
  return (
    <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>

      <ul id="menu">
        {sideBarItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
