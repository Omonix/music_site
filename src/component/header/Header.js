import ReactSwitch from "react-switch";

const Header = ({ moder, changer }) => {
  return (
    <div className="header">
      <div className="switch">
        <ReactSwitch
          onChange={() => changer()}
          checked={moder === "dark"}
          offColor="#6F1313"
          onColor="#317331"
        />
      </div>
    </div>
  );
};

export default Header;
