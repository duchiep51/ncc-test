import NCCLogo from "../assets/logoNCC 1.png";
import HTMLLogo from "../assets/html-icon 1.png";
import CSSLogo from "../assets/css-icon 1.png";
import URLLogo from "../assets/url-icon 1.png";
import Footer from "./Footer";
import Menu from "./Menu";

const Main = () => {
  return (
    <main className="main">
    <Menu />
      <div className="container">
        <img src={NCCLogo} alt="ncc" />
        <div className="section1">
          <div className="title1">Lorem ipsum dolor sit asmet?</div>
          <div className="text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique consequat placerat. Vestibulum auctor pellentesque sem, eu
            posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
            facilisis, ligula in mattis sodales, augue justo tristique nulla,
            sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
            mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
            convallis. Quisque suscipit maximus vestibulum. Phasellus congue
            mollis orci, sit amet luctus augue tristique eu. Donec vulputate
            odio neque, sed semper turpis pellentesque a.
          </div>
        </div>
        <div className="section2">
          <div className="small-item">
            <div className="small-item-title">Lorem ipsum dolor sit asmet?</div>
            <div>
              <img src={CSSLogo} alt="html" className="image" />
              <p className="small-item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed non dui sodales, faucibus libero ut,
                posuere felis. Donec imperdiet suscipit accumsan. Aenean
                consequat condimentum velit ut tempor. Nam porta massa in metus
                bibendum congue. Pellentesque ultrices liquam egestas nunc at{" "}
              </p>
            </div>
          </div>
          <div className="small-item">
            <div className="small-item-title">Lorem ipsum dolor sit asmet?</div>
            <div>
              <img src={HTMLLogo} alt="html" className="image" />
              <p className="small-item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed non dui sodales, faucibus libero ut,
                posuere felis. Donec imperdiet suscipit accumsan. Aenean
                consequat condimentum velit ut tempor. Nam porta massa in metus
                bibendum congue. Pellentesque ultrices liquam egestas nunc at{" "}
              </p>
            </div>
          </div>
          <div className="small-item">
            <div className="small-item-title">Lorem ipsum dolor sit asmet?</div>
            <div>
              <img src={URLLogo} alt="html" className="image" />
              <p className="small-item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed non dui sodales, faucibus libero ut,
                posuere felis. Donec imperdiet suscipit accumsan. Aenean
                consequat condimentum velit ut tempor. Nam porta massa in metus
                bibendum congue. Pellentesque ultrices liquam egestas nunc at{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
     </main>
  );
};

export default Main;
