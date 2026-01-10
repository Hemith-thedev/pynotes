import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const NavButton = ({ path, label, isDropdown, buttonaArray }) => {
  let PATH = (path) ? path : null;
  let LABEL = (label) ? label : "";
  let ISDROPDOWN = (isDropdown) ? isDropdown : false;
  let BUTTONARRAY = (buttonaArray) ? buttonaArray : [];
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const checkIsRouteExistsInArray = () => {
    let RouteExists = false;
    BUTTONARRAY.forEach((button) => {
      if (location.pathname === button.path) {
        RouteExists = true;
      }
    });
    return RouteExists;
  }
  if (ISDROPDOWN && BUTTONARRAY) {
    return (
      <ul className={`nav-buttons ${(isOpen || checkIsRouteExistsInArray()) ? "opened" : ""}`}>
        <li onClick={() => setIsOpen(prev => !prev)} className="nav-buttons-toggle">
          <div className={`icon ${isOpen && "rotate"}`}>
            <ChevronRight />
          </div>
          <p>{label}</p>
        </li>
        {
          (isOpen || checkIsRouteExistsInArray()) && BUTTONARRAY.map((button, index) => (
            <li key={index} className="nav-button-wrapper">
              <button
                onClick={() => {
                  navigate(button.path);
                }}
                className={`nav-button ${location.pathname === button.path ? "active" : ""}`}
              >{button.label}</button>
            </li>
          ))
        }
      </ul>
    )
  }
  else {
    return (
      <li>
        <button
          className={`nav-button ${location.pathname === PATH ? "active" : ""}`}
          onClick={() => {
            setIsOpen(false);
            navigate(PATH);
          }}
        >{LABEL}</button>
      </li>
    )
  }
}

const SideBar = ({isOpen}) => {
  const location = useLocation();
  return (
    <div className="sidebar" style={{
      width: (isOpen) ? "30%" : "0%",
      padding: `1rem ${(isOpen) ? "1rem" : "0"}`,
    }}>
      <div className="wrapper">
        {location.pathname !== "/" && <div className="logo">
          <h5 className="fill-primary-secondary">Python</h5>
        </div>}
        <ul className="tree">
          <NavButton path="/" label="Introduction" />
          <NavButton path="/installation" label="Installation" />
          <NavButton path="/basics" label="Basics" />
          <NavButton path="/input-and-output-statements" label="IO Statements" />
          <NavButton label="Control Statements" isDropdown={true} buttonaArray={
            [
              { path: "/control-statements/branching", label: "Branching" },
              { path: "/control-statements/looping", label: "Looping" },
            ]
          } />
          <NavButton path="/tests/1" label="Test - 1" />
          <NavButton path="/list" label="List" />
          <NavButton path="/tuple" label="Tuple" />
          <NavButton path="/dictionary" label="Dictionary" />
          <NavButton path="/functions" label="Functions" />
          <NavButton path="/modules" label="Modules" />
        </ul>
      </div>
    </div>
  )
}

export default SideBar;