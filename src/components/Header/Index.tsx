import { IoOptions, IoSearchOutline } from "react-icons/io5";
import Container from "../Container/Index";
import { NavLink } from "react-router-dom";
import { useState } from "react";

interface Header {
  children?: any;
}

const defaultProps = {};

function Header(propsIn: Header) {
  const props = { ...defaultProps, ...propsIn };
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <>
      <Container
        padding="px-4"
        background="bg-white w-full top-0 fixed z-50 shadow-lg border-b-2 border-emerald-600"
      >
        <div className="flex items-center justify-between py-4">
          <Header.Brands />
          <div className="flex flex-row justify-between gap-4">
            <Header.ButtonHeader myFunction={() => alert("Hallo")}>
              <IoSearchOutline className="w-6 h-6" />
            </Header.ButtonHeader>
            <Header.ButtonHeader myFunction={handleToggle}>
              <IoOptions className="w-6 h-6" />
            </Header.ButtonHeader>
          </div>
        </div>
        <Header.Menu isToggle={toggle} />
      </Container>
    </>
  );
}

function Brands() {
  return (
    <>
      <div className="flex">
        <span className="text-base text-emerald-900 font-semibold">
          MWC NU RANCAEKEK
        </span>
      </div>
    </>
  );
}

interface ButtonHeader {
  myFunction?(): any;
  children?: any;
}

const defaultButtonHeaderProps = {
  myFunction: () => console.log("Click Function"),
};

function ButtonHeader(propsIn: ButtonHeader) {
  const props = { ...defaultButtonHeaderProps, ...propsIn };
  return (
    <>
      <button className="w-6 h-6 text-emerald-900" onClick={props.myFunction}>
        {props.children}
      </button>
    </>
  );
}

interface Menu {
  isToggle?: boolean;
  toggleMenu?: boolean;
}

const defaultToggleProps = {
  toggleMenu: false,
  isToggle: false,
};

function Menu(propsIn: Menu) {
  const [toggleMenu, setToggleMenu] = useState(true);

  function handleToggleMenu() {
    setToggleMenu(!toggleMenu);
  }
  const props = { ...defaultToggleProps, ...propsIn };
  return (
    <ul
      className={`${
        props.isToggle == toggleMenu ? "hidden" : "block"
      } flex flex-col gap-2 py-4 w-full -mt-4 transition-transform ease-in-out ${
        toggleMenu != props.isToggle ? "block" : "hidden"
      } `}
    >
      <li>
        <NavLink
          to={"/warta"}
          className={({ isActive }) =>
            isActive ? "text-emerald-800 font-medium" : "text-slate-600"
          }
        >
          <button className="text-sm mt-1" onClick={handleToggleMenu}>
            Warta
          </button>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/tokoh"}
          className={({ isActive }) =>
            isActive ? "text-emerald-800 font-medium" : "text-slate-600"
          }
        >
          <button className="text-sm mt-1" onClick={handleToggleMenu}>
            Tokoh
          </button>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/hikmah"}
          className={({ isActive }) =>
            isActive ? "text-emerald-800 font-medium" : "text-slate-600"
          }
        >
          <button className="text-sm mt-1" onClick={handleToggleMenu}>
            Hikmah
          </button>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/khutbah"}
          className={({ isActive }) =>
            isActive ? "text-emerald-800 font-medium" : "text-slate-600"
          }
        >
          <button className="text-sm mt-1" onClick={handleToggleMenu}>
            Khutbah
          </button>
        </NavLink>
      </li>
    </ul>
  );
}

Header.Brands = Brands;
Header.ButtonHeader = ButtonHeader;
Header.Menu = Menu;
export default Header;
